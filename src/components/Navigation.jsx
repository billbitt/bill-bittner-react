import React from 'react';
import { Link } from "react-router";
import "./Navigation.css";

export default function() {
	return (
		<div className="navigation">
            <h2><Link to="/about" activeStyle={{color: 'yellow'}}>About Me</Link></h2>
            <h2><Link to="/portfolio" activeStyle={{color: 'yellow'}}>Portfolio</Link></h2>
            {/*<h2><Link to="/contact">Contact</Link></h2>*/}
        </div>
	);
}
