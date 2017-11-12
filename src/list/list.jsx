import React, { Component } from 'react';
import ListItem from './listItem.jsx';

class List extends Component {
	componentDidMount() {
		this.props.fetchAll()
	}
	renderList() {
		return this.props.list.map((pk, index) => {
			return <ListItem 
				key={index} 
				id={pk.id} 
				name={pk.identifier}
				onClick={() => this.props.selectPk(pk.id)}/>
		})
	}
	render() {
		return <div className='list'>
			<h1>list component </h1>
			{this.renderList()}
		</div>
	}
}

export default List;
