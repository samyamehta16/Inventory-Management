// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "MYKEY",
  authDomain: "inventory-management-app-96dee.firebaseapp.com",
  projectId: "inventory-management-app-96dee",
  storageBucket: "inventory-management-app-96dee.appspot.com",
  messagingSenderId: "631280385008",
  appId: "1:631280385008:web:1b32fa50de5cf3de8d3b35",
  measurementId: "G-5KE49F1D1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
