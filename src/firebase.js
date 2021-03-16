import firebase from "firebase";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7OY9sKorIV7uBuKvWW4TYQFEXzI0Nwvs",
    authDomain: "bt3103-week-6-69c3a.firebaseapp.com",
    projectId: "bt3103-week-6-69c3a",
    storageBucket: "bt3103-week-6-69c3a.appspot.com",
    messagingSenderId: "320317331225",
    appId: "1:320317331225:web:f7d049e19418fb1f029788",
    measurementId: "G-6ZB646DP62"
  };



firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

