import React, { Component } from 'react';
import { leadingZeros } from '../../utils.js';
import { Container, Artwork, Title, Sprite, Footer, NationalNo, Footprint } from './spriteCard.styles.jsx';


class SpriteCard extends Component {
	renderTitle() {
		return <Title>{this.props.name}</Title>
	}
	renderFooter() {
		return <Footer>
			{this.renderNationalNo()}
			{this.renderFootprint()}
		</Footer>	
	}
	renderNationalNo() {
		return <NationalNo>#{leadingZeros(this.props.id)}</NationalNo>
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
		return <Sprite src={this.props.sprite} alt={`${this.props.name} sprite`}/>
	}
	renderFootprint() {
		if(!this.props.footprint) return;
		return <Footprint>
			<img src={this.props.footprint} alt={`${this.props.name} footprint`}/>
		</Footprint>
	}
	render() {
		return <Container>
			{this.renderTitle()}
			{this.renderArtwork()}
			{this.renderSprite()}
			{this.renderFooter()}
		</Container>
	}
}

export default SpriteCard;
