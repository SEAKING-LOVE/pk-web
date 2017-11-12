import React, { Component } from 'react';

class ListItem extends Component {
	static defaultProps = {
		id: 0,
		name: ''
	}
	render() {
		return <div className='listItem'>
			{this.props.id} {this.props.name}
		</div>
	}
}

export default ListItem;
