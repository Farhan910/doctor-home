// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSeRlvGymbw14ASjPa-BGxmGeCVOoxdgs",
  authDomain: "doctor-home-webapp.firebaseapp.com",
  projectId: "doctor-home-webapp",
  storageBucket: "doctor-home-webapp.appspot.com",
  messagingSenderId: "750648146454",
  appId: "1:750648146454:web:3b58f1f59ca3dc88125337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;