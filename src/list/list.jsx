import React, { Component } from 'react';
import ListItem from './listItem/listItem.jsx';
import { ListContainer } from './list.styles.jsx';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			filteredList: []
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
		return <div>
			<input 
			type='text'
			placeholder='search'
			onChange={this.handleSearch}/>
		</div>
	}
	handleSearch(e) {
		const searchString = e.target.value;
		const filteredList = this.props.list.filter((pk) => {
			return pk.name.toLowerCase().includes(searchString.toLowerCase());
		});
		this.setState({ filteredList });
	}
	render() {
		return <div>
			{this.renderSearchField()}
			{this.renderList()}
		</div>
	}
}

export default List;
