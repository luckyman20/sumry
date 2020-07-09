import React from "react";
import ReactDOM from "react-dom";
import AuthForm from "./AuthForm";
import Dashboard from "./Dashboard";
import About from "./About";
import DevReport from "./DevReport";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.StrictMode>
      {/*}
			<Nav defaultActiveKey="/login" as="ul">
				<Nav.Item as="li" className="ml-auto">
					<Nav.Link href="/about">About</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav.Item>
			</Nav>
			<Router>
				<AuthForm path="/login" />
				<Dashboard path="/dashboard" />
				<About path="/about" />
				<DevReport path="/report/:id" />
			</Router>*/}
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
