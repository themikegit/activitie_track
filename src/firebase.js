import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API,
	authDomain: process.env.REACT_APP_AUTH,
	databaseURL: process.env.REACT_APP_DATABASE,
	projectId: process.env.REACT_APP_ID,
	storageBucket: process.env.REACT_APP_STORAGE,
	messagingSenderId: process.env.REACT_APP_MSG,
	appId: process.env.REACT_AP_ID,
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
