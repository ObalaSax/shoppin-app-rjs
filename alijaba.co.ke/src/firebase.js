// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5e0Gm-FZg4PQRDzT5UjW44ei_roo8W3U",
  authDomain: "alijaba-1.firebaseapp.com",
  projectId: "alijaba-1",
  storageBucket: "alijaba-1.appspot.com",
  messagingSenderId: "404393988393",
  appId: "1:404393988393:web:bdde3c179c1d7206166738",
  measurementId: "G-H471S80GFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider(app);

export { app, auth, googleAuth };
