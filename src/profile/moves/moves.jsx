import React, { Component } from 'react';

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
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
		return <div className='tabs'>
			{tabs}
		</div>
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
		return JSON.stringify(this.tabs[this.state.tabIndex].data);
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