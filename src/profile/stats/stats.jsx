import React, { Component } from 'react';

class Stats extends Component {
	render() {
		return <div className='profile'>
			stats component
			<div>HP: {this.props.hp}</div>
			<div>ATK: {this.props.attack}</div>
			<div>DEF: {this.props.defense}</div>
			<div>SP ATK: {this.props.spAttack}</div>
			<div>SP DEF: {this.props.spDefense}</div>
			<div>SPD: {this.props.speed}</div>
		</div>
	}
}

export default Stats;