import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAD7xAmWX3OkcLwy5gDafbGpaRdwMeDtmE",
  authDomain: "company-blog-78937.firebaseapp.com",
  projectId: "company-blog-78937",
  storageBucket: "company-blog-78937.appspot.com",
  messagingSenderId: "612638233150",
  appId: "1:612638233150:web:6d695fad0512231098376f"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore sevice
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
