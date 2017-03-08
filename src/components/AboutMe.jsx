import React from 'react';
import "./AboutMe.css";

export default function() {
	return (
        <div className="about-me">
            <h2>About Me</h2>
            <div className="card">
                <div className="heading-text">
                    <h2>Hi, my name is Bill Bittner.</h2>
                </div>
                <div className="detail-text">
                    <p>I am a web developer.  I've watched the internet develop from the days of asking Jeeves over dial up to the Facebook revolution and beyond.  I am fascinated by the web and how it continues to evolve, and I am energized by getting to be a part of that growth. </p>
                    <p>This site is an online portfolio that highlights some of my development projects.  For a full look at everything I'm working on, check out my <a target="_blank" href="https://github.com/billbitt">GitHub</a>.</p>
                    <p>In addition to developing web applications, I enjoy <a  target="_blank" href="https://publictransistor.bandcamp.com/">playing music</a>, woodworking, gardening, and video games.</p>
                </div>
            </div>
        </div>
	);
}





