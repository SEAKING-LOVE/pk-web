import React, { Component } from 'react';
import ListItem from './listItem/listItem.jsx';
import { Container, ListContainer, SearchContainer, MenuToggler } from './list.styles.jsx';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			filteredList: [],
			open: true
		};
		this.handleSearch = this.handleSearch.bind(this);
	}
	componentDidMount() {
		this.props.requestAllPokemon();
	}
	componentWillUpdate(nextProps) {
		if(nextProps.list.length > 0 && this.state.filteredList.length == 0) {
			this.setState({ filteredList: nextProps.list });
		}
	}
	renderMenuToggler() {
		return <MenuToggler>
			
		</MenuToggler>
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
		return <Container>
			{this.renderSearchField()}
			{this.renderList()}
		</Container>
	}
}

export default List;
