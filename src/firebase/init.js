import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwc1T5kHrzO1IK75ZcG2BpOMRDwqViBkg",
  authDomain: "pp-real-chat.firebaseapp.com",
  databaseURL: "https://pp-real-chat.firebaseio.com",
  projectId: "pp-real-chat",
  storageBucket: "pp-real-chat.appspot.com",
  messagingSenderId: "750800256493",
  appId: "1:750800256493:web:af98e58d6cff0feaa2fbe4"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();