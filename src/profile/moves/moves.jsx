import React, { Component } from 'react';

class Moves extends Component {
	render() {
		return <div className='moves'>
			Moves component
			<div>{JSON.stringify(this.props.machine)}</div>
			<div>{JSON.stringify(this.props.levelUp)}</div>
			<div>{JSON.stringify(this.props.egg)}</div>
			<div>{JSON.stringify(this.props.tutor)}</div>
		</div>
	}
}

export default Moves;