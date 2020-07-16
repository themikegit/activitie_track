import React, { useContext, useState } from "react";
import { Context } from "./Context";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddAct() {
	const { addAct } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [inputHandler, setinputHandler] = useState();

	const submitActivitie = () => {
		addAct(inputHandler);
		handleClose();
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				style={{ margin: "10px" }}
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
			>
				Add Activity
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Add new Activity</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Add your today activity. Add as much details as you can!
					</DialogContentText>
					<TextField
						onChange={(e) => setinputHandler(e.target.value)}
						autoFocus
						margin="dense"
						id="name"
						label="Description"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={() => submitActivitie()} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
