import React, { useContext } from "react";
import { Context } from "./Context";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	deleteBtn: {},
});

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

export default function TableList() {
	const { activityTxt, deleteAct } = useContext(Context);

	const classes = useStyles();

	function createData(description) {
		return { description };
	}
	const maped = activityTxt.map((t) =>
		createData({ desc: t.description, id: t.id })
	);
	const rows = maped;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">
							Total number: {activityTxt.length}{" "}
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.description.id}>
							<StyledTableCell align="left">
								{row.description.desc}
								<IconButton
									onClick={() => deleteAct(row.description.id)}
									aria-label="delete"
									className={classes.deleteBtn}
								>
									<DeleteIcon fontSize="small" />
								</IconButton>{" "}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
