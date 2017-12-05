import React, { Component } from 'react';
import { leadingZeros } from '../../utils.js';

class SpriteCard extends Component {
	renderHeader() {
		return <div>
			{leadingZeros(this.props.id)} {this.props.name}
			{this.renderTypes()}
		</div>
	}
	renderTypes() {
		const types = this.props.types.map((type, index) => {
			return <div key={index}>{type.name}</div>
		});
		return <div>{types}</div>
	}
	renderArtwork() {
		return <img src={this.props.artwork} alt={`${this.props.name} artwork`}/>
	}
	renderSprite() {
		return <img src={this.props.sprite} alt={`${this.props.name} sprite`}/>
	}
	render() {
		return <div>
			{this.renderHeader()}
			{this.renderArtwork()}
			{this.renderSprite()}
		</div>
	}
}

export default SpriteCard;
