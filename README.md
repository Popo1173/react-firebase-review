# PJにインストール
```npm install --save firebase```

# firebaseでの設定.  
Authenticationの設定を行うことで、設定タグを取得できる。  
SDK の設定と構成で「自動、CND、構成」があるが、基本はCDNを使う. 

# App.js にインポート
初期化を行えば、どのコンポーネントでも利用できる。  
※(App.js)で行っているため。  
## インポート
インストールしたAPIは「firebase」というモジュールに「firebase」というオブジェクトとして用意される
``` 
//firebase API のインポート
import firebase from "firebase";
```
## CND情報を設定
```
//firebaseの設定
  var firebaseConfig = {
    apiKey: "AIzaSyCRNs3xGpHxBZ4g9kxYvJtiIxdCNAYvAps",
    authDomain: "react-review-3c2dd.firebaseapp.com",
    databaseURL: "https://react-review-3c2dd-default-rtdb.firebaseio.com",
    projectId: "react-review-3c2dd",
    storageBucket: "react-review-3c2dd.appspot.com",
    messagingSenderId: "1048134485966",
    appId: "1:1048134485966:web:77b2cdecb0864147b88d9f",
    measurementId: "G-2HEFHZ3QGZ"
  };
  // Firebaseの初期化（一度だけ初期化する）
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
```

## getFireDataメソッドでFirebaseにアクセス
```
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.getFireData();
    }
    
    getFireData(){
     ...取り出す処理....
    }
    
```

### databaseオブジェクトの取
firebaseオブジェクトからdatabaseオブジェクトを取り出す  
```let db = firebase.database();```

### sample参照オブジェクト
databaseオブジェクトのrefメソッドでsampleデータを取り出し  
引数に取り出すデータのパスを指定（今回はPJ直下のsample)
```let ref = db.ref('sample/');```

### データ取得
参照オブジェクトからデータを取り出す処理を実行. 
orderByKey,limitToFirst(10)は常にセットで呼び出す。
````
//orderByKey()メソッドでデータを順に並び替えて取り出し
ref.orderByKey()
    //引数に指定した数だけデータを取り出す
    .limitToFirst(10)
    .on('value', (snapshot) =>{
        self.setState({
            data: snapshot.val()
        });
    });
````
並べ替えメソッド
- orderByKey: データを順に並び替えて取り出し
- orderByValue: 値順に並び替えて取り出し
- orderByChild: 引数に指定した子ノードの順によって並び替えて取り出し

フィルダーメソッド
- equalTo: 引数の値と等しいもの取り出し
- limitToFirst： 最初から引数で指定した数だけ取り出し
- limitToLast：  最後から引数で指定した数だけ取り出し
- startAt: 引数で指定した値のデータから取り出し
- endAt: 引数で指定した値のデータまで取り出し

## メソッドチェーン
データ取得順番は「並べ替えメソッド」「フィルターメソッド」を1つづつ順に呼び出す  
文を切らずに次々とメソッドを呼び出すやり方
```ref.orderByKey().limitToFirst(10)...```

## onイベント
```ref.orderByKey().limitToFirst(10).. ```でアクセスした結果の処理を行う  
(Firebaseから送られたデータを受け取った後の処理）  
DBへのアクセスは非同期のためメインプログラムとは関係なく進むため、  
実行後の後始末を設定している。
```
//valuでDBにアクセスし値を受け取るイベントを第一引数に
//第二引数でsnapshot関数を実行（イベント時に受け取ったデータなどの情報をまとめたオブジェクト）
.on('value', (snapshot) =>{
    self.setState({
      //取得したデータをsnapshotからデータを取り出し、dataステートに設定
        data: snapshot.val()
    });
```
