import firebase from "firebase/app"
import 'firebase/firestore'
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCGcHKsNC3Ve76c9U2Th9REviQ1fZTsmr4",
    authDomain: "blog-test-firebase.firebaseapp.com",
    projectId: "blog-test-firebase",
    storageBucket: "blog-test-firebase.appspot.com",
    messagingSenderId: "393975604835",
    appId: "1:393975604835:web:fdb622c9c8eb6a5a357a56"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// invoke this function
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
