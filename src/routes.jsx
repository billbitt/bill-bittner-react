import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import AboutPage from "./containers/AboutPage";
import PortfolioPage from "./containers/PortfolioPage";
// import ContactPage from "./containers/ContactPage";


export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={AboutPage}/>
		<Route path="/about" component={AboutPage} />
		<Route path="/portfolio" component={PortfolioPage} />
		{/*<Route path="/contact" component={ContactPage} />*/}
	</Route>;
};
 