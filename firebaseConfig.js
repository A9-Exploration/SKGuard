// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKeNRAJAb6I73kRZXBFA6gAGHEe7cJP64",
  authDomain: "guard-shift-management-system.firebaseapp.com",
  projectId: "guard-shift-management-system",
  storageBucket: "guard-shift-management-system.appspot.com",
  messagingSenderId: "1016911918067",
  appId: "1:1016911918067:web:01b1474fb222f3404b1886",
  measurementId: "G-RMC0FXL5PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// IOS: 1016911918067-t6e884oik15sem35cgqq8bi3k3hdtcr7.apps.googleusercontent.com
// Android: 1016911918067-8m6q91d6rc2ilpo33ria4sd2qgnidac2.apps.googleusercontent.com
