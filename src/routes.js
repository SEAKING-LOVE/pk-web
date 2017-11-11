import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import List from './list/list.container.js';
import Profile from './profile/profile.container.js';

class App extends Component {
	render() {
		return <div className='app'> 
			<List />
			<Profile />
		</div>
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
