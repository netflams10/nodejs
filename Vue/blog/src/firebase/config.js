import firebase from "firebase/app"
import 'firebase/firestore'
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "",
    authDomain: "blog-test-firebase.firebaseapp.com",
    projectId: "blog-test-firebase",
    storageBucket: "blog-test-firebase.appspot.com",
    messagingSenderId: "",
    appId: ""
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// invoke this function
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
