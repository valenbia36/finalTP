import firebase from 'firebase ';
import 'firebase/firestore' 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfsggp1Nyz2w8svPmSUBVrsDdgEEgFA0",
  authDomain: "tp-firebase-32e03.firebaseapp.com",
  projectId: "tp-firebase-32e03",
  storageBucket: "tp-firebase-32e03.appspot.com",
  messagingSenderId: "801342787674",
  appId: "1:801342787674:web:3c13f561808ec19df54863",
  measurementId: "G-NFEWVGMGC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore()

export default {
    firebase,
    db

}