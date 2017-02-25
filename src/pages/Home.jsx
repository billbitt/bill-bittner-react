import React, { Component } from 'react';
import "./Home.css";
import AboutMe from '../components/AboutMe';
import Connect from '../components/Connect';

class Home extends Component {
	render() {
		return (
			<div>
				<AboutMe />
				<Connect />
			</div>
		);
	}
}

export default Home;
