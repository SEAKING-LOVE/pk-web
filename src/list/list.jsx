import React, { Component } from 'react';
import ListItem from './listItem/listItem.jsx';
import { container, ListContainer, SearchContainer, MenuToggler } from './list.styles.jsx';


class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			filteredList: [],
			open: true,
			windowWidth: 1000,
			menuWidth: 0,
			isMobile: false
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	componentDidMount() {
		this.props.requestAllPokemon();
		const windowWidth = window.innerWidth;
		const mobileWidth = 900;

		this.setState({
			windowWidth: windowWidth,
			menuWidth: windowWidth * 1,
			isMobile: windowWidth <= mobileWidth
		});
		console.log(windowWidth)
	}
	componentWillUpdate(nextProps) {
		if(nextProps.list.length > 0 && this.state.filteredList.length == 0) {
			this.setState({ filteredList: nextProps.list });
		}
	}
	renderMenuToggler() {
		if(!this.state.isMobile) return null;
		const arrow = () => {
			return {__html: this.state.open ? '&#x029C0;' : '&#x029C1;'}
		}
		return <MenuToggler
			className={this.state.open ? 'open' : ''}
			onClick={this.toggleMenu}
			dangerouslySetInnerHTML={arrow()} />
	}
	toggleMenu() {
		this.setState({ open: !this.state.open });
	}
	menuStyle() {
		if(!this.state.isMobile) return null;
		return {
			width: `${this.state.menuWidth}px`,
			left: this.state.open ? '0px' : `-${this.state.menuWidth * 1.02}px`,
			position: 'absolute'
		}
	}
	renderList() {
		const listItems = this.state.filteredList.map((pk, index) => {
			return <ListItem 
				key={index} 
				id={pk.id} 
				name={pk.name}
				sprite={pk.sprite}
				onClick={() => this.props.requestUpdateSelectedId(pk.id)}/>
		});
		return <ListContainer>
			{listItems}
		</ListContainer>
	}
	renderSearchField() {
		return <SearchContainer>
			<input 
			type='text'
			placeholder='search'
			onChange={this.handleSearch}/>
		</SearchContainer>
	}
	handleSearch(e) {
		const searchString = e.target.value;
		const filteredList = this.props.list.filter((pk) => {
			return pk.name.toLowerCase().includes(searchString.toLowerCase());
		});
		this.setState({ filteredList });
	}
	render() {
		return <div className={container} style={this.menuStyle()}>
			{this.renderMenuToggler()}
			{this.renderSearchField()}
			{this.renderList()}
		</div>
	}
}

export default List;
