import React from 'react';
import "./AboutMe.css";

export default function() {
	return (
        <div className="about-me">
            <h2>About Me</h2>
            <div className="card">
                <div className="heading-text">
                    <h2>Hi, I'm Bill.</h2>
                </div>
                <div className="detail-text">
                    <p>I am a web developer who is fascinated by the internet and how it continues to evolve.</p>
                    <p>I remember asking Jeeves questions over dial up, getting a Facebook account when you needed a school email address, and hearing about this new thing called "the block chain" for the first time.  I am always wondering what will be next, and I am energized by getting to be a part of that continued evolution.</p>
                    <p>This site is my online portfolio, and it highlights some of my development projects.  For a full look at everything I'm working on, check out my <a target="_blank" href="https://github.com/billbitt">GitHub</a>.</p>
                    <p>In addition to developing web applications, I enjoy <a  target="_blank" href="https://publictransistor.bandcamp.com/">playing music</a>, woodworking, gardening, and video games, but most of all, I just like making cool things.</p>
                </div>
            </div>
        </div>
	);
}





