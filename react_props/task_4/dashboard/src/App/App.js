import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import PropTypes from 'prop-types';

function App() {

	return (
		<>
			<Notifications />
			<div className="App">
				<Header />
			</div>
			<div className="App-body">
				<Login />
			</div>
			<div className="App-footer">
				<Footer />
			</div>
		</>
	);
}
App.defaultProps = {
	isLoggedIn: false
}

App.propTypes = {
	isLoggedIn: PropTypes.bool
}
export default App;
