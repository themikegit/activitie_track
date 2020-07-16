import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "./Context";

export default function SelectDrop() {
	const { month, setmonth } = useContext(Context);

	const handleChange = (event) => {
		setmonth(event);
	};
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));
	const classes = useStyles();
	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">Month</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={month}
					onChange={(e) => handleChange(e.target.value)}
				>
					<MenuItem value={0}>Jan</MenuItem>
					<MenuItem value={1}>Feb</MenuItem>
					<MenuItem value={2}>March</MenuItem>
					<MenuItem value={3}>April</MenuItem>
					<MenuItem value={4}>May</MenuItem>
					<MenuItem value={5}>June</MenuItem>
					<MenuItem value={6}>July</MenuItem>
					<MenuItem value={7}>Aug</MenuItem>
					<MenuItem value={8}>Sep</MenuItem>
					<MenuItem value={9}>Oct</MenuItem>
					<MenuItem value={10}>Nov</MenuItem>
					<MenuItem value={11}>Dec</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
