import React, { Component } from 'react';
import { Container, Name, sprite } from './listItem.styles.jsx';
import { leadingZeros } from '../../utils.js';


class ListItem extends Component {
	static defaultProps = {
		id: 0,
		name: '',
		sprite: '',
		onClick: () => {},
	}
	renderSprite() {
		return <div className={`${sprite} pki n${this.props.id}`}>
			
		</div>
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
		return <Container className='listItem' onClick={this.props.onClick}>
			{this.renderSprite()}
			{this.renderId()}
			{this.renderName()}
		</Container>
	}
}

export default ListItem;
