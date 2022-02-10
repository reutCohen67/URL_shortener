
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC4CPsD1gKvg-taLZFIiCo9_ft5kphB6Lg",
    authDomain: "url-shortener-90052.firebaseapp.com",
    projectId: "url-shortener-90052",
    storageBucket: "url-shortener-90052.appspot.com",
    messagingSenderId: "1093797115965",
    appId: "1:1093797115965:web:2fb6592026bab02a7cd254",
    measurementId: "G-WJ9WNXDQGW"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();


 