import React, { Component} from 'react';
import './PortfolioItem.css';

class PortfolioItem extends Component {
	
	render() {
		return <div>
			
			<div className="card">
				<h2>{this.props.title}</h2>	
				<img className="portfolio-image" src={this.props.imgSource} alt={this.props.title}/>
				<div className="description">
					<p>{this.props.description}</p>
				</div>
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
					<br/>
					{this.props.resources.map((item, index) => {
						return (
							<div className="tech-item" key={index}>{item}, </div>
						);
					})}
					<br/>
					<br/>

					<h4>Links</h4>
					<ul>
						{this.props.links.map((item, index) => {
							return (
								<li key={index}><a className="link-item" href={item.link} key={index}>{item.title}</a></li>
							);
						})}
					</ul>
					
				</div>
			</div>
		</div>;
	}
}

export default PortfolioItem;
