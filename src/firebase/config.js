import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBbynh1zifw3sXYSJ-2Fa0Wj5n8a8TfPNU",
  authDomain: "my-portfolio-4c6ac.firebaseapp.com",
  databaseURL: "https://my-portfolio-4c6ac.firebaseio.com",
  projectId: "my-portfolio-4c6ac",
  storageBucket: "my-portfolio-4c6ac.appspot.com",
  messagingSenderId: "549417644796",
  appId: "1:549417644796:web:e3175fa43eaa7adafc5d79",
  measurementId: "G-MXN3JT1K50",
};

firebase.initializeApp(config);
const analytics = firebase.analytics();
