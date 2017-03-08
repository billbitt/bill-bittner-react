import React, { Component, PropTypes } from 'react';
import './PortfolioItem.css';

class PortfolioItem extends Component {
	
	render() {
		return <div>
			
			<div className="card">
				<div className="caption">
					<h2>{this.props.title}</h2>	
				</div>
				<img className="portfolio-image" src={this.props.imgSource} alt={this.props.title}/>
				<p className="description details" >{this.props.description}</p>
				<div className="details">
					<h4>Project Highlights</h4>
					<ul>
						{this.props.highlights.map((item, index) => {
							return (
								<li key={index}>{item}</li>
							);
						})}
					</ul>
					<h4>Libraries and Technologies</h4>
					<p>
						{this.props.resources.map((item, index) => {
							return (
								<div className="tech-item" key={index}>{item}, </div>
							);
						})}
					</p>

					<h4>Links</h4>
					<ul>
						{this.props.links.map((item, index) => {
							return (
								<li><a className="link-item" href={item.link} key={index}>{item.title}</a></li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>;
	}
}

PortfolioItem.propTypes = {
	title: PropTypes.string.isRequired,
	imgSource: PropTypes.string.isRequired,
	screenshots: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	highlights: PropTypes.string.isRequired,
	resources: PropTypes.string.isRequired,
	links: PropTypes.string.isRequired,
};

export default PortfolioItem;
