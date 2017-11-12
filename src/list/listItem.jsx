import React, { Component } from 'react';

class ListItem extends Component {
	static defaultProps = {
		id: 0,
		name: '',
		onClick: () => {},
	}
	render() {
		return <div className='listItem' onClick={this.props.onClick}>
			{this.props.id} {this.props.name}
		</div>
	}
}

export default ListItem;
