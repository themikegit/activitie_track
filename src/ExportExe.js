import React, { useContext, useState } from "react";
import { Context } from "./Context";
import { periodList } from "./period";
import ReactExport from "react-export-excel";
import Button from "@material-ui/core/Button";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExe() {
	const { activityTxt, month } = useContext(Context);
 const shuffle  = periodList.sort(function(){
   return 0.5 - Math.random();
 })
	const daysMonth = new Date(2020, month, 0).getDate();
	const arr = [];
	for (let i = 0; i <= daysMonth; i++) {
		arr.push(new Date(2020, month, i));
	}

	const filtArr = arr.filter(
		(item) => item.getDay() !== 6 && item.getDay() !== 0
	);
	const finalDate = [];
	const redArr = filtArr.reduce(function (result, current) {
		finalDate.push(current.toLocaleDateString());
		finalDate.push(current.toLocaleDateString());
		return finalDate;
	});

	const dataForExe = activityTxt.map(function (item, index) {
		const timeRandom =
			index % 2 === 0 ? shuffle[index].timeA : shuffle[index - 1].timeB;
		//populate object for xlxs

		const entry = {
			date: finalDate[index],
			time: timeRandom,
			activitie: item.description,
		};

		return entry;
	});

	const dataSet1 = dataForExe;
	return (
		<ExcelFile
			element={
				<Button variant="contained" color="secondary">
					download data
				</Button>
			}
		>
			<ExcelSheet data={dataSet1} name="Table">
				<ExcelColumn style={{ color: "yellow" }} label="Date" value="date" />
				<ExcelColumn label="Time" value="time" />
				<ExcelColumn label="Activities" value="activitie" />
			</ExcelSheet>
		</ExcelFile>
	);
}
