import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEAupfjOb5TyzsgnWM6GHjwwftDl8NCjU",
    authDomain: "hello-tractor-18236.firebaseapp.com",
    projectId: "hello-tractor-18236",
    storageBucket: "hello-tractor-18236.appspot.com",
    messagingSenderId: "221691493609",
    appId: "1:221691493609:web:d65e83ce96fd2523dc4478",
    measurementId: "G-CJFNWXPRVP"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };