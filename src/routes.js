import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import List from './list/list.container.jsx';
import Profile from './profile/profile.container.jsx';
import Splash from './splash/splash.jsx';

import styled, { css } from 'react-emotion';
import { Fonts } from './themes/themes.js';

const Body = styled('div')`
	font-family: ${Fonts.bodyFamily};
	display: flex;
	&>div:last-child {
		flex: 1;
	}
`;

class App extends Component {
	render() {
		return (<Body>
			<Splash />
			<List />
			<Profile />
		</Body>);
	}
}

// <Route path='/about' component={About}/>
export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App}/>
			</Switch>
		</BrowserRouter>
	)
};
