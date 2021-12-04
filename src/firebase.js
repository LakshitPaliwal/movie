import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDWUSTxBPClt5_40FR8TAhcAIDYlIciveo",
  authDomain: "movie-ffbb6.firebaseapp.com",
  projectId: "movie-ffbb6",
  storageBucket: "movie-ffbb6.appspot.com",
  messagingSenderId: "234408765548",
  appId: "1:234408765548:web:9dbf5189c79d91088d5049",
  measurementId: "G-FPG7902Q42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;