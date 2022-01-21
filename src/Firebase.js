import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import {getAuth} from 'firebase/auth'
//Initialise firebase 
const app = firebase.initializeApp({
    
  apiKey: "AIzaSyBgyR-cQDeYRa3R05TNbfh51nUhhhzlp0I",
  authDomain: "auth-demo-ab270.firebaseapp.com",
  projectId: "auth-demo-ab270",
  storageBucket: "auth-demo-ab270.appspot.com",
  messagingSenderId: "41575461649",
  appId: "1:41575461649:web:7eb49fcbc35638b081d2b0"
});

// export const auth = app.auth();
export const auth = getAuth(app);