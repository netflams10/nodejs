import firebase from "firebase/app"
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbAP5HAniL_1qPBxom-0MsDwqEsna4gSo",
    authDomain: "live-chat-project-9fbab.firebaseapp.com",
    projectId: "live-chat-project-9fbab",
    storageBucket: "live-chat-project-9fbab.appspot.com",
    messagingSenderId: "163726480904",
    appId: "1:163726480904:web:945d5bfd10b524ced223bd"
  };

// init firbase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirebase = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirebase, timestamp, projectAuth}