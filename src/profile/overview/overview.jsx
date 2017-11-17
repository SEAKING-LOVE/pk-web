import React, { Component } from 'react';

class Overview extends Component {
	render() {
		return <div className='overview'>
			overview component
			<div>id: {this.props.id}</div>
			<div>name: {this.props.name}</div>
			<div>height: {this.props.height}</div>
			<div>weight: {this.props.weight}</div>
			<div>base experience: {this.props.baseExperience}</div>
			<div>type: {JSON.stringify(this.props.types)}</div>
		</div>
	}
}

export default Overview;