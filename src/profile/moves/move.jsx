import React, { Component } from 'react';
import { Nav } from './moves.styles.jsx'

class Move extends Component {
	constructor(props) {
		super(props);
	}
	static defaultProps = {
		id: 0,
		level: 0,
		name: ''
	};

	render() {
		return <div>
			<div>{this.props.level}</div>
			<div>{this.props.name}</div>
		</div>
	}
}

export default Move;