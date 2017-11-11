import React, { Component } from 'react';

class List extends Component {
	componentDidMount() {
		this.props.fetchAll()
	}
	render() {
		return <div className='list'>
			list component
		</div>
	}
}

export default List;
