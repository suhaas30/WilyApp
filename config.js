import firebase from 'firebase';
require("@firebase/firestore")


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAkkjyzQN-OEqjTd3PCp4NYuqbgk4DxFxk",
    authDomain: "wilyapp-98920.firebaseapp.com",
    projectId: "wilyapp-98920",
    storageBucket: "wilyapp-98920.appspot.com",
    messagingSenderId: "878929677935",
    appId: "1:878929677935:web:811824974faf88d44ec79a",
    measurementId: "G-H7ERR2JMNE"
  };
  
  if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); } export default firebase.firestore();