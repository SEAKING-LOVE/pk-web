import React, { Component } from 'react';
import { Container, Name } from './listItem.styles.jsx';
import { leadingZeros } from '../../utils.js';

class ListItem extends Component {
	static defaultProps = {
		id: 0,
		name: '',
		sprite: '',
		onClick: () => {},
	}
	renderSprite() {
		return <img src={this.props.sprite} alt={`${this.props.name} sprite`}/>
	}
	renderId() {
		return <div>
			{leadingZeros(this.props.id)}
		</div>
	}
	renderName() {
		return <Name>
			{this.props.name}
		</Name>
	}
	render() {
		return <Container onClick={this.props.onClick}>
			{this.renderSprite()}
			{this.renderId()}
			{this.renderName()}
		</Container>
	}
}

export default ListItem;
