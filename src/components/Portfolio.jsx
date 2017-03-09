import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import "./Portfolio.css";

import LetsHackLogoUrl from "./letsHackLogo.png";
import BookTrackerLogoUrl from "./bookTrackerLogo.png";

const PORTFOLIO_ITEMS = [
	{
		title: "letsHack",
		img: LetsHackLogoUrl,
		screenshots: ["http://i.imgur.com/Ewl0l7M.png", "http://i.imgur.com/Ydi7XD0.png", "http://i.imgur.com/JNtKlyk.png"],
		description: "'LetsHack' is a collaborative coding web application that pairs users with a random partner, and presents the two users with a hacking challenge that they will need to work together to solve through pair programming.  By completing challenges on letsHack, users not only improve their coding skills, but also their teamwork and communication.",
		highlights: ["Wrote the backend of this application utilizing Sequelize.js ORM and MVC structure", "Used MySQL database with Sequelize ORM", "Used express for the server", "Used handlebars to render the view"],
		resources: ["bcrypt", "body-parser", "connect-flash", "cookie-parser", "express", "express-handlebars", "express-session", "handlebars", "method-override", "morgan", "mysql", "passport", "passport-local", "sequelize"],
		links: [{title: "live application", link: "https://polar-sea-42102.herokuapp.com/login"}, {title: "application overview (ppt)", link: "https://docs.google.com/presentation/d/1DJZedp5DKjjFjCM9r3zlsF3VLGBXBzzJzFoaZCIIs6s/edit"}, {title: "github", link: "https://github.com/billbitt/letsHack"}],
	},
	{
		title: "Book Tracker",
		img: BookTrackerLogoUrl,
		screenshots: ["http://i.imgur.com/iYqNRuN.png"],
		description: "The Book Tracker is an application I built to help me track the books I want to read.",
		highlights: ["Wrote front end using HTML, Handlebars.js, CSS and JavaScript", "Wrote the backend of the application using Express.js, MySQL, and MVC structure", "Wrote my own ORM to communicate between my model and databse"],
		resources: ["Google Books API", "Express.js", "Method-override.js", "Handlebars.js", "MySQL", "jQuery", "Google Fonts"],
		links: [{title: "github", link: "https://github.com/billbitt/book-tracker"}],
	}
];

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio">
				{PORTFOLIO_ITEMS.map((item, index) => {
					return < PortfolioItem key={index} title={item.title} imgSource={item.img} screenshots={item.screenshots} description={item.description} highlights={item.highlights} resources={item.resources} links={item.links} />
				})}
			</div>
		);
	}
}

export default Portfolio;
