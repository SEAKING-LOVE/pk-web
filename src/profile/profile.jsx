import React, { Component } from 'react';
import Overview from './overview/overview.container.jsx';
import Stats from './stats/stats.container.jsx';
import Moves from './moves/moves.container.jsx';
import Evolution from './evolution/evolution.container.jsx';

import { TabContainer, TabHeader, activeTab } from './profile.styles.jsx';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 1
		};
		this.tabs = [
			{ label: 'overview', component: <Overview /> },
			{ label: 'stats', component: <Stats /> },
			{ label: 'moves', component: <Moves /> },
			{ label: 'evolution', component: <Evolution /> },
		];
	}
	componentDidMount() {
		this.props.requestPokemonProfile(this.props.selectedId);
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.selectedId !== nextProps.selectedId) {
			this.props.requestPokemonProfile(this.props.selectedId);
		}
	}
	renderTabs() {
		const tabs = this.tabs.map((tab, index) => {
			return this.renderTab(tab.label, index);
		});
		return <TabContainer className='tabs'>
			{tabs}
		</TabContainer>;
	}
	renderTab(label, index) {
		return <TabHeader
			key={index}
			onClick={() => this.selectTab(index)}
			className={this.state.tabIndex === index ? activeTab : ''}>
			{label}
		</TabHeader>
	}
	selectTab(index) {
		this.setState({ tabIndex: index });
	}
	renderContent() {
		return this.tabs[this.state.tabIndex].component;
	}
	render() {
		return <div className='profile'>
			<h1> profile component </h1>
			{this.renderTabs()}
			{this.renderContent()}
		</div>
	}
}

export default Profile;
