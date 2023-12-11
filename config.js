import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCmaLqSozIMEouQgiZGi4um6SyOkdkHUGs",
    authDomain: "e-ride-4-98ea6.firebaseapp.com",
    projectId: "e-ride-4-98ea6",
    storageBucket: "e-ride-4-98ea6.appspot.com",
    messagingSenderId: "193159132215",
    appId: "1:193159132215:web:0aab7e75695e31441d7bb2"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
