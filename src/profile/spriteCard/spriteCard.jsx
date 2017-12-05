import React, { Component } from 'react';

class SpriteCard extends Component {
	render() {
		return <div>
			sprite card component
			<img src={this.props.artwork} alt={`${this.props.name} artwork`}/>
		</div>
	}
}

export default SpriteCard;
