import React from 'react';
import "./AboutPage.css";
import "./AboutPageMediaQuery.css";
import AboutMe from "../components/AboutMe.jsx";
import Connect from "../components/Connect.jsx";

export default function() {
	return (
        <div className="container">
            <AboutMe />  
            <Connect />  
        </div>
	);
}