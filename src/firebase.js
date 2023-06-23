// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCkgVs_fdddJG0TW2BqOe-3m6FqEhlpAU",
  authDomain: "apoorvi-aad6d.firebaseapp.com",
  projectId: "apoorvi-aad6d",
  storageBucket: "apoorvi-aad6d.appspot.com",
  messagingSenderId: "383456059003",
  appId: "1:383456059003:web:484feca85ac228e3cdccde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

// const analytics = getAnalytics(app);
 export const auth = getAuth(app);

export const provider= new GoogleAuthProvider();
