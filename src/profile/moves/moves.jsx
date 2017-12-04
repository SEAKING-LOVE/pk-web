import React, { Component } from 'react'
import { Nav } from './moves.styles.jsx'
import Move from './move.jsx'

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 3
		};
		this.tabs = [
			{label: 'machine', data: props.machine},
			{label: 'level up', data: props.levelUp},
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
		return <div
			key={index}
			onClick={() => {this.selectTab(index)}}
			className={this.state.tabIndex === index ? 'active' : ''}>
			{label}
		</div>
	}
	selectTab(index) {
		this.setState({ tabIndex: index });
	}
	renderMoves() {
		const moves = this.tabs[this.state.tabIndex].data.map((move, index) => {
			return this.renderMove(move, index); 
		});	
		return <div>
			{moves}
		</div>
	}
	renderMove(move, index) {
		return <Move
			key={index}
			id={move.id}
			level={move.level}
			name={move.name}/>
	}
	render() {
		return <div className='moves'>
			Moves component
			{this.renderTabs()}
			{this.renderMoves()}
		</div>
	}
}

export default Moves;