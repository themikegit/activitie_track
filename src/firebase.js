import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBIAFoCu0DFeQ0tovBx9kx10vflISNMkzc",
	authDomain: "activities-c4ef8.firebaseapp.com",
	databaseURL: "https://activities-c4ef8.firebaseio.com",
	projectId: "activities-c4ef8",
	storageBucket: "activities-c4ef8.appspot.com",
	messagingSenderId: "35371557101",
	appId: "1:35371557101:web:fe2351373c581a3fa26ce4",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
