import React from 'react';
import './Header.css';
import { Link } from 'react-router';

export default function() {
	return (
		<nav className="navbar">
			<div className="container-fluid navbar-custom">
				<div className="row">
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right navbar-right-custom">
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/portfolio">Portfolio</Link></li>
							<li><img className="Header-logo" src="http://i.imgur.com/8WjD5BK.jpg" alt="Bill Bittner"/></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
