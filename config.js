import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDbUaZtna2nVoVi615OHv1WoW_xxhvijbk",
  authDomain: "book-santa-80109.firebaseapp.com",
  projectId: "book-santa-80109",
  storageBucket: "book-santa-80109.appspot.com",
  messagingSenderId: "290835754231",
  appId: "1:290835754231:web:98653f8a6a2c7404daf7f2"
};

  firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()      