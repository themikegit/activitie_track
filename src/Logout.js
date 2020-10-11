import React from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import history from "./history";
export default function Logout() {
	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				history.push("#/");
				window.location.reload();
				// Sign-out successful.
			})
			.catch(function (error) {
				// An error happened.
			});
	};
	return (
		<div>
			<Button onClick={() => logout()} variant="contained" color="primary">
				Log Out
			</Button>
		</div>
	);
}
