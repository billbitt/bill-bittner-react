import React, { PropTypes, Component } from 'react';
import './App.css';
import Logo from "../components/Logo";


class App extends Component {
	render() {
		return (
			<div id="app">
				<div className="side-bar">
					<Logo />
				</div>
				<div className="main">
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default App;
