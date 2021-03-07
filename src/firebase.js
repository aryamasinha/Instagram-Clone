// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_pbAXtoVL8_xzNDJBgM_UMFe0EvWL5pQ",
    authDomain: "instagram-clone-b289f.firebaseapp.com",
    databaseURL: "https://instagram-clone-b289f-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-b289f",
    storageBucket: "instagram-clone-b289f.appspot.com",
    messagingSenderId: "719854682378",
    appId: "1:719854682378:web:53d72e5420b04bcb173af3",
    measurementId: "G-X8Y3DNK56F"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};