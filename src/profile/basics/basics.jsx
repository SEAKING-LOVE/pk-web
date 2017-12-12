import React, { Component } from 'react';
import Overview from './overview/overview.container.jsx';
import Stats from './stats/stats.container.jsx';
// import { } from './basics.styles.jsx'

class Basics extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>
			<Overview />
			<Stats />
		</div>
	}
}

export default Basics;