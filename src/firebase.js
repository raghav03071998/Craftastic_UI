import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBsCcOGe1eu8VuVra_TB-BuC-tX1342mx0",
	    authDomain: "craftastic-56f41.firebaseapp.com",
	    projectId: "craftastic-56f41",
	    storageBucket: "process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
	    messagingSenderId: "process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
	    appId: "process.env.NEXT_PUBLIC_FIREBASE_APP_ID",
	    measurementId: "process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",

    }
)

export const auth = app.auth();
export default app;