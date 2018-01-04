import React, { Component } from 'react';
import { Colors } from '../../themes/themes.js';
import { MoveRow, MoveLevel, MoveName, MoveGeneric, MoveClass, TypeBadge } from './moves.styles.jsx'


class Move extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: ''
		};
	}
	componentWillReceiveProps(nextProps) {
		console.log('hello from move.jsx')
	}
	static defaultProps = {
		id: 0,
		level: 0,
		name: 'tackle',
		type: 'normal',
		class: 'physical',
		power: 0,
		pp: 0,
		accuracy: 0,
		onClick: () => {}
	};
	typeColor() {
		return {
			backgroundColor: Colors.types[(this.props.type).toLowerCase()]()
		}
	}
	classColor() {
		return {
			backgroundColor: Colors.moveCategories[(this.props.class).toLowerCase()]
		}
	}
	render() {
		return <MoveRow onClick={this.props.onClick}>
			<MoveLevel>{this.props.level}</MoveLevel>
			<MoveName>{this.props.name}</MoveName>
			<MoveGeneric><TypeBadge style={this.typeColor()}>{this.props.type}</TypeBadge></MoveGeneric>
			<MoveGeneric><TypeBadge style={this.classColor()}>{this.props.class}</TypeBadge></MoveGeneric>
			<MoveGeneric>{this.props.power}</MoveGeneric>
			<MoveGeneric>{this.props.accuracy}</MoveGeneric>
			<MoveGeneric>{this.props.pp}</MoveGeneric>
		</MoveRow>
	}
}

export default Move;
