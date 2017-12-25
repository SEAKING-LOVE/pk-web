import React, { Component } from 'react';
import { Colors } from '../../themes/themes.js';

import { StageCell } from './evolution.styles.jsx'


class Stage extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
	  name: ''
	}

	render() {
		return <StageCell>{this.props.pkmn.name}</StageCell>
	}
}

export default Stage;
