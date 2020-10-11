import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import history from "./history";
import TableList from "./TableList";
import AddAct from "./AddAct";
import Select from "./SelectDrop";
import { CntProvider } from "./Context";
import ExportExe from "./ExportExe";
import SignInSide from "./SignInSide";
import Logout from "./Logout";

function App() {
	return (
		<CntProvider>
			<Router history={history}>
				<Route exact path="/" component={SignInSide} />

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Route exact path="/activities" component={AddAct} />
						<Route exact path="/activities" component={Select} />
						<Route exact path="/activities" component={ExportExe} />
					</div>
					<div>
						<Route exact path="/activities" component={Logout} />
					</div>
				</div>

				<Route exact path="/activities" component={TableList} />
			</Router>
		</CntProvider>
	);
}

export default App;
