import React, { Component } from 'react';
import { leadingZeros } from '../../utils.js';
import { Container, Artwork } from './spriteCard.styles.jsx';


class SpriteCard extends Component {
	renderHeader() {
		return <div>{this.props.name}</div>
	}
	renderNationalNo() {
		return <div>#{leadingZeros(this.props.id)}</div>
	}
	renderTypes() {
		const types = this.props.types.map((type, index) => {
			return <div key={index}>{type.name}</div>
		});
		return <div>{types}</div>
	}
	renderArtwork() {
		return <Artwork src={this.props.artwork} alt={`${this.props.name} artwork`}/>
	}
	renderSprite() {
		return <img src={this.props.sprite} alt={`${this.props.name} sprite`}/>
	}
	render() {
		return <Container>
			{this.renderHeader()}
			{this.renderArtwork()}
			{this.renderSprite()}
		</Container>
	}
}

export default SpriteCard;
