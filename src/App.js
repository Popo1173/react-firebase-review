import React, { Component } from 'react';
import './App.css';
import SampleData from './fire/SampleData';
//firebase API のインポート
import firebase from "firebase";

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
  // Firebaseの初期化
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //APPコンポーネント
  class App extends Component {
    render(){
      return(
        <div>
          <h1>Firebase</h1>
          <h2>Sample Data</h2>
          <SampleData />
        </div>
      );
    }
  }
  export default App;