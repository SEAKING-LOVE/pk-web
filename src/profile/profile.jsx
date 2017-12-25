import React, { Component } from 'react';
import SpriteCard from './spriteCard/spriteCard.container.jsx';
import Basics from './basics/basics.container.jsx';
import Moves from './moves/moves.container.jsx';
import Evolution from './evolution/evolution.container.jsx';

import { ProfileContainer, TabContainer, TabHeader, activeTab } from './profile.styles.jsx';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
		};
		this.tabs = [
			{ label: 'summary', component: <Basics /> },
			{ label: 'moves', component: <Moves /> },
			{ label: 'evolution', component: <Evolution /> },
		];
	}
	componentDidMount() {
		this.props.requestPokemonProfile(this.props.selectedId);
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.selectedId !== nextProps.selectedId) {
			this.props.requestPokemonProfile(nextProps.selectedId);
		}
	}
	renderProfile() {
		if(!this.props.requestSuccess) return null; //having loading state
		return <ProfileContainer className='profile'>
			{this.renderContent()}
		</ProfileContainer>
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
		return <div>
			<SpriteCard />
			{this.renderTabs()}
			{this.renderPkDetails()}
		</div>
	}
	renderPkDetails() {
		return this.tabs[this.state.tabIndex].component;
	}
	render() {
		return this.renderProfile();
	}
}

export default Profile;
