// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUK1rldkeyiADZlH6wfvYSpcGMVVBFudw",
  authDomain: "sethor-7e29f.firebaseapp.com",
  projectId: "sethor-7e29f",
  storageBucket: "sethor-7e29f.appspot.com",
  messagingSenderId: "473698307348",
  appId: "1:473698307348:web:95fe557ea3789553144601",
  measurementId: "G-RP9BNSD6GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;