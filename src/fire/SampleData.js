import React, {Component} from 'react';

//firebaseオブジェクトをインポート
import firebase from 'firebase';
import "firebase/storage";

class Sampledata extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px"
    }

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.getFireData();
    }

    //Firebaseからのデータ取得
    getFireData(){
        //firebaseオブジェクトからdatabaseオブジェクトを取り出す
        let db = firebase.database();
        //databaseオブジェクトのrefメソッドでsampleデータを取り出し
        let ref = db.ref('sample/');
        let self = this;
        //データ取得処理
        //orderByKey()メソッドでデータを順に並び替えて取り出し
        ref.orderByKey()
            //引数に指定した数だけデータを取り出す
            .limitToFirst(10)
            //valuでDBにアクセスし値を受け取るイベントを第一引数に
            //第二引数でsnapshot関数を実行（イベント時に受け取ったデータなどの情報をまとめたオブジェクト）
            .on('value', (snapshot) =>{
                self.setState({
                    //取得したデータをsnapshotからデータを取り出し、dataステートに設定
                    data: snapshot.val()
                });
            });
    }

    //データ表示の生成
    getTableData(){
        let result = [];
        if(this.state.data == null || this.state.data.length == 0) {
            return [<tr key="0"><th>NO DATA.</th></tr>];
        }
        for(let i in this.state.data) {
            result.push(
                <tr key={i}>
                    <th>{this.state.data[i].ID}</th>
                    <th>{this.state.data[i].name}</th>
                    <th>{this.state.data[i].message}</th>
                </tr>
            );
        }
        return result
    }

    render(){
        if(this.state.data.length == 0) {
            this.getFireData();
        }
        return(
            <table>
                <tbody>
                    {this.getTableData()}
                </tbody>
            </table>
        )
    }
}
export default Sampledata;