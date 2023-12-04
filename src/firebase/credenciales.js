// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGIwFd8qOoz4AsMaZ3z5ZY198HXEUq57U",
  authDomain: "app-chat-bb6a9.firebaseapp.com",
  projectId: "app-chat-bb6a9",
  storageBucket: "app-chat-bb6a9.appspot.com",
  messagingSenderId: "828805894342",
  appId: "1:828805894342:web:3b53ea1f46e6bd335f07c7",
  measurementId: "G-EDPC1F29FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);