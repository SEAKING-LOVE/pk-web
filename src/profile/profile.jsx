import React, { Component } from 'react';
import Stats from './stats/stats.container.jsx';

class Profile extends Component {
	render() {
		return <div className='profile'>
			<h1> profile component </h1>
			<Stats />
		</div>
	}
}

export default Profile;