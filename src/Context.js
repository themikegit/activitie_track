import React, { useState, createContext, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase/app";
export const Context = createContext();

export const CntProvider = (props) => {
	//GET DATA FROM FIRESTORE
	const [activityTxt, setActivityTxt] = useState([]);
	useEffect(() => {
		const unsubcribe = firebase
			.firestore()
			.collection("content")
			.orderBy("time", "asc")
			.onSnapshot((snapshot) => {
				const tempData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setActivityTxt(tempData);
			});
		return () => unsubcribe();
	}, []);
	/// ADD DATA TO FIRESTORE
	const addAct = (data) => {
		db.collection("content")
			.doc()
			.set({
				description: data,
				time: Date.now(),
			})
			.then(function () {
				console.log("Document successfully written!");
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	// DELTE USER FUNCTION
	const deleteAct = (id) => {
		db.collection("content")
			.doc(id)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
	};

	/// State for month
	const [month, setmonth] = useState(new Date().getMonth());

	return (
		<Context.Provider
			value={{
				activityTxt,
				addAct,
				deleteAct,
				month,
				setmonth,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
