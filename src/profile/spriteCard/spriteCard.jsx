import React, { Component } from 'react';
import Type from './type/type.jsx';
import { leadingZeros } from '../../utils.js';
import { Container, Artwork, Title, Footer, NationalNo, Footprint } from './spriteCard.styles.jsx';
import { Icons } from '../../themes/themes.js';

class SpriteCard extends Component {
	renderTitle() {
		return <Title>{this.props.name}</Title>
	}
	renderFooter() {
		return <Footer>
			<div>
				{this.renderNationalNo()}
				{this.renderTypes()}

			</div>
			<div>
				{this.renderFootprint()}
			</div>
		</Footer>	
	}
	renderNationalNo() {
		return <NationalNo>#{leadingZeros(this.props.id)}</NationalNo>
	}
	renderTypes() {
		return this.props.types.map((type, index) => {
			return <Type key={index} name={type.name} />
		});
	}
	renderArtwork() {
		return <Artwork src={this.props.artwork} alt={`${this.props.name} artwork`}/>
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
			{this.renderFooter()}
		</Container>
	}
}

export default SpriteCard;
