import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAMQ-wGkS8sv6wHdMZUXDY26QCeyF2Pvn4",
    authDomain: "disneyplus-clone-828ad.firebaseapp.com",
    projectId: "disneyplus-clone-828ad",
    storageBucket: "disneyplus-clone-828ad.appspot.com",
    messagingSenderId: "1001783011272",
    appId: "1:1001783011272:web:92aee3dbda3a54bf5182fd",
    measurementId: "G-6ZW517SYF7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth, provider, storage}
  export default db;




//   always remember to install firebase for everything to work, and also its other required files.


