import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe79sGc9CVyvgKGr0CAGpReyB1HmbcAFA",
  authDomain: "pesansantai-8914a.firebaseapp.com",
  databaseURL: "https://pesansantai-8914a-default-rtdb.firebaseio.com",
  projectId: "pesansantai-8914a",
  storageBucket: "pesansantai-8914a.appspot.com",
  messagingSenderId: "990487466945",
  appId: "1:990487466945:web:1a3fc4d605d53eb9c81540",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export { useAuthState } from "react-firebase-hooks/auth";
export { useCollectionData } from "react-firebase-hooks/firestore";
