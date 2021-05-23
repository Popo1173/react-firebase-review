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

