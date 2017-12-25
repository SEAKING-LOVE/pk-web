import React, { Component } from 'react';
import ListItem from './listItem/listItem.jsx';
import VirtualList from 'react-tiny-virtual-list';
import { container, ListContainer, SearchContainer, MenuToggler } from './list.styles.jsx';
import { Metrics } from '../themes/themes.js';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			filteredList: [],
			open: true,
			menuWidth: 0,
			isMobile: false
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);
	}
	componentDidMount() {
		this.props.requestAllPokemon();
		const windowWidth = window.innerWidth;

		this.setState({
			menuWidth: windowWidth * 1,
			isMobile: windowWidth <= Metrics.mobileWidth
		});
		window.addEventListener('resize', this.handleWindowResize);
	}
	componentWillUpdate(nextProps) {
		if(nextProps.list.length > 0 && this.state.filteredList.length == 0) {
			this.setState({ filteredList: nextProps.list });
		}
	}
	handleWindowResize(e) {
		const width = e.target.innerWidth;
		this.setState({
			menuWidth: width,
			isMobile: width <= Metrics.mobileWidth
		});
	}
	renderMenuToggler() {
		if(!this.state.isMobile) return null;
		const arrow = () => {
			return {__html: this.state.open ? '&#x029C0;' : '&#x029C1;'}
		}
		return <MenuToggler
			style={this.menuTogglerStyle()}
			className={this.state.open ? 'open' : ''}
			onClick={this.toggleMenu}
			dangerouslySetInnerHTML={arrow()} />
	}
	menuTogglerStyle() {
		if(this.state.open) return {}; 
		return {
			width: this.state.menuWidth + 50
		}
	}
	toggleMenu() {
		this.setState({ open: !this.state.open });
	}
	menuStyle() {
		if(!this.state.isMobile) return null;
		return {
			width: `100%`,
			left: this.state.open ? '0px' : `-${this.state.menuWidth * 1.02}px`,
			position: 'fixed',
			borderRight: 'none',
		}
	}
	renderPkmnListItem({index, style}) {
		return <div key={index} style={style}>
			<ListItem
				id={this.state.filteredList[index].id}
				name={this.state.filteredList[index].name}
				sprite={this.state.filteredList[index].sprite}
				onClick={() => this.handleListItemClick(this.state.filteredList[index].id)}/>
		</div>
	}

	renderList() {
		return <VirtualList
					className={ListContainer}
					width='100%'
					height='100%'
					itemCount={this.state.filteredList.length}
					itemSize={72}
					overscanCount={25}
					renderItem={({index, style}) => this.renderPkmnListItem({index, style})}
				/>
	}
	handleListItemClick(id) {
		this.props.requestUpdateSelectedId(id);
		this.setState({ open: false });
	}
	renderSearchField() {
		return <SearchContainer>
			<input
			type='text'
			placeholder="Who's that pokemon?"
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
