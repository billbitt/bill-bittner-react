import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import "./Portfolio.css";

import LetsHackLogoUrl from "../assets/letsHackLogo.png";
import BookTrackerLogoUrl from "../assets/bookTrackerLogo.png";
import GuestmateUrl from "../assets/guestmateLogo.png";
import BillBittDynamicUrl from "../assets/bill-bitt-dynamic.png";
import BillBittReactUrl from "../assets/bill-bitt-react.png";

const PORTFOLIO_ITEMS = [
	{
		title: "Guestmate",
		img: GuestmateUrl,
		description: "Guestmate is the premiere cloud-based guest-list solution for concert venues. In this modern age, concert venues still rely on pen or pencil, crumpled napkins, and hand written notes to compile the guest lists for their events.  This requires a lot of leg work to coordinate, and often results in names being left off or recorded incorrectly on the list.  Guestmate is a web-based guest list application that provides a reliable, accurate, real-time alternative to the antiquated pen and paper method.",
		highlights: ["I wrote the application's front end using React for the view and Redux for application-level state.", "I develped a back end using Express for the server and Mongoose ORM and mongoDB for data storage."],
		resources: ["CSS", "materialize", "passport", "passport-local", "react", "react-router", "redux", "express", "body-parser", "mongoose", "mongoDB", "passport"],
		links: [{title: "live application", link: "http://www.guestmate.io"}, {title: "application overview (ppt)", link: "https://docs.google.com/presentation/d/16AuuNiVx-6C_qLy8eopBgdTxHk44lBssERGpnRnCYJc/edit?usp=sharing"}, {title: "github", link: "https://github.com/billbitt/guest-list/"}],
	},
	{
		title: "letsHack",
		img: LetsHackLogoUrl,
		description: "'LetsHack' is a collaborative coding web application that pairs users with a random partner, and presents the two users with a hacking challenge that they will need to work together to solve through pair programming.  By completing challenges on letsHack, users not only improve their coding skills, but also their teamwork and communication.",
		highlights: ["Wrote the backend of this application utilizing Sequelize.js ORM and MVC structure", "Used MySQL database with Sequelize ORM", "Used express for the server", "Used handlebars to render the view"],
		resources: ["bcrypt", "body-parser", "connect-flash", "cookie-parser", "express", "express-handlebars", "express-session", "handlebars", "method-override", "morgan", "mysql", "passport", "passport-local", "sequelize"],
		links: [{title: "live application", link: "https://polar-sea-42102.herokuapp.com/login"}, {title: "application overview (ppt)", link: "https://docs.google.com/presentation/d/1DJZedp5DKjjFjCM9r3zlsF3VLGBXBzzJzFoaZCIIs6s/edit"}, {title: "github", link: "https://github.com/billbitt/letsHack"}],
	},
	{
		title: "Book Tracker",
		img: BookTrackerLogoUrl,
		description: "The Book Tracker is an application I built to help me track the books I want to read.",
		highlights: ["Wrote front end using HTML, Handlebars.js, CSS and JavaScript", "Wrote the backend of the application using Express.js, MySQL, and MVC structure", "Wrote my own ORM to communicate between my model and databse"],
		resources: ["Google Books API", "Express.js", "Method-override.js", "Handlebars.js", "MySQL", "jQuery", "Google Fonts"],
		links: [{title: "github", link: "https://github.com/billbitt/book-tracker"}],
	},
	{
		title: "HTML/CSS-Based Personal Portfolio",
		img: BillBittDynamicUrl,
		description: "In this project, I took my basic HTML/CSS portfolio and added responsive media queries. My goal with this project was to practice creating a site for a client based on their exact design, and to get it pixel perfect",
		highlights: ["Recreated client's design in pixel-perfect detail using HTML and CSS", "Utilized CSS media queries to adjust the site layout based on user screen size"],
		resources: ["HTML", "CSS", "media queries", "heroku"],
		links: [{title: "live application", link: "https://bill-responsive-portfolio.herokuapp.com/"}, {title: "github (Check this out for pictures of the design I was recreating)", link: "https://github.com/billbitt/responsive-portfolio"}],
	},
	{
		title: "React-based Personal Portfolio",
		img: BillBittReactUrl,
		description: "This is the site you are currently viewing!  For this project, I wanted to create a simple portfolio that quickly and elegantly showed visitors who I am and what projects I am workign on.  I used React and Express, with a bit of CSS to bring it all together.",
		highlights: ["React and Express to serve the site and its content", "CSS to style the content", "CSS media queries to display the content in different forms depending on the user's device and screen size"],
		resources: ["React", "CSS", "CSS media queries", "Express.js"],
		links: [{title: "live application", link: "http://www.billbittner.info/"}, {title: "github", link: "https://github.com/billbitt/bill-bittner-react"}],
	},
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
