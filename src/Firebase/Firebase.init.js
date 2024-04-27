// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8jz71gTRkEuR8nDgxrr3H1DNgkH4HNTg",
  authDomain: "euro-journey.firebaseapp.com",
  projectId: "euro-journey",
  storageBucket: "euro-journey.appspot.com",
  messagingSenderId: "609315777731",
  appId: "1:609315777731:web:f9e7d79832a2a90b878676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;