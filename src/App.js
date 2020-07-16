import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
		<div>
			<CntProvider>
				<Router history={history}>
					<Route exact path="/" component={SignInSide} />

					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Route exact path="/activities" component={AddAct} />
						<div style={{ display: "flex", alignItems: "center" }}>
							<Route exact path="/activities" component={Select} />
							<Route exact path="/activities" component={ExportExe} />
							<Route exact path="/activities" component={Logout} />
						</div>
					</div>

					<Route exact path="/activities" component={TableList} />
				</Router>
			</CntProvider>
		</div>
	);
}

export default App;
