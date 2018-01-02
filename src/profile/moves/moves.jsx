import React, { Component } from 'react'
import Move from './move.jsx'

import { MovesSection, Nav, NavHeader, activeTab, MoveContainer, MoveRow, MoveLevel, MoveName, MoveType, MoveClass, MoveGeneric } from './moves.styles.jsx';

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
		};
		this.tabs = this.updateTabs(props);
	}
	componentWillReceiveProps(nextProps) {
		this.tabs = this.updateTabs(nextProps);
	}
	updateTabs(data) {
		return [
			{label: 'level up', data: data.levelUp},
			{label: 'machine', data: data.machine},
			{label: 'egg', data: data.egg},
			{label: 'tutor', data: data.tutor},
		]
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
		if (this.tabs[this.state.tabIndex].data) {
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
		const description = move.description ? move.description : 'Could not retrieve description';
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
			description={description}
			onClick={() => this.props.requestMove(move.id)}/>
	}
	render() {
		return <MovesSection className='moves'>
			{this.renderTabs()}
			{this.renderMoves()}
		</MovesSection>
	}
}

export default Moves;
