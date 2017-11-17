import React, { Component } from 'react';

class Evolution extends Component {
	render() {
		return <div className='evolution'>
			Evolution component
			{JSON.stringify(this.props.chain)}
		</div>
	}
}

export default Evolution;