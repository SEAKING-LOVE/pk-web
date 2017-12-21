import React, { Component } from 'react';
import { containerShape, TypeIcon } from './type.styles.jsx';
import { Icons, Colors } from '../../../themes/themes.js';


class Type extends Component {
	static defaultProps = {
		name: 'normal'
	};
	backgroundColor() {
		return {
			backgroundColor: Colors.types[this.props.name]()
		}
	}
	render() {
		return <div
			className={containerShape}
			style={this.backgroundColor()}>
			<TypeIcon
				src={Icons[this.props.name]}
				alt={`${this.props.name} icon`}/>
		</div>
	}
}

export default Type;
