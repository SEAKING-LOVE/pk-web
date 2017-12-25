import React, { Component } from 'react'
import Move from './move.jsx'

import { Nav, NavHeader, activeTab, MoveContainer, MoveRow, MoveLevel, MoveName, MoveType, MoveClass, MoveGeneric } from './moves.styles.jsx';

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
		};
		this.tabs = [
			{label: 'level up', data: props.levelUp},
			{label: 'machine', data: props.machine},
			{label: 'egg', data: props.egg},
			{label: 'tutor', data: props.tutor},
		];
	}
	renderTabs() {
		const tabs = this.tabs.map((tab, index) => {
			return this.renderTab(tab.label, index);
		});
		return <Nav>
			{tabs}
		</Nav>
	}
	renderTab(label, index) {
		return <NavHeader
			key={index}
			onClick={() => {this.selectTab(index)}}
			className={this.state.tabIndex === index ? activeTab : ''}>
			{label}
		</NavHeader>
	}
	selectTab(index) {
		this.setState({ tabIndex: index });
	}
	renderMoves() {
		let moves = [];
		if (this.tabs[this.state.tabIndex].data !== undefined) {
			moves = this.tabs[this.state.tabIndex].data.map((move, index) => {
				return this.renderMove(move, index); 
			});	
		}
		return <MoveContainer>
			<MoveRow>
				<MoveLevel className='header'>Level</MoveLevel>
				<MoveName className='header'>Name</MoveName>
				<MoveGeneric className='header'>Type</MoveGeneric>
				<MoveGeneric className='header'>Category</MoveGeneric>
				<MoveGeneric className='header'>Power</MoveGeneric>
				<MoveGeneric className='header'>Accuracy</MoveGeneric>
				<MoveGeneric className='header'>PP</MoveGeneric>
			</MoveRow>
			{moves}
		</MoveContainer>
	}
	renderMove(move, index) {
		return <Move
			key={index}
			id={move.id}
			level={move.level}
			name={move.name}
			power={move.power}
			pp={move.pp}
			accuracy={move.accuracy}
			type={move.type}
			class={move.class}
			/>
	}
	render() {
		return <div className='moves'>
			{this.renderTabs()}
			{this.renderMoves()}
		</div>
	}
}

export default Moves;