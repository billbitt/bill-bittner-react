import React, { Component } from 'react';
import "./Home.css";
import AboutMe from '../components/AboutMe';
import Connect from '../components/Connect';

class Home extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<AboutMe />
					<Connect />
				</div>
				<div className="col-md-3"></div>
			</div>
		);
	}
}

export default Home;
