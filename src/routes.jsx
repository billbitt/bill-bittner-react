import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import AboutPage from "./containers/AboutPage";


export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={AboutPage}/>
	</Route>;
};
 