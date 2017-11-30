import React, { Component } from 'react';
import { leadingZeros } from '../../utils.js';
import { OverviewContainer, Row, Cell, Title, Subtitle, Subtype, Subnumber } from './overview.styles.jsx'

class Overview extends Component {
	renderTypes() {
		return this.props.types.map( type => {
			return <Subtype key={type.id}>{type.name}</Subtype>;
		});
	}
	render() {
		return <OverviewContainer className='overview'>
			<Row>
				<Cell>
					<Subtitle>{leadingZeros(this.props.id)}</Subtitle>
					<Title>National No</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.name}</Subtitle>
					<Title>Name</Title>
				</Cell>
				<Cell>
					<Subtitle> {this.renderTypes()} </Subtitle>
					<Title>Type</Title>
				</Cell>
			</Row>
			<Row>
				<Cell>
					<Subtitle>{this.props.height}m</Subtitle>
					<Title>Height</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.weight}kg</Subtitle>
					<Title>Weight</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.baseExperience}</Subtitle>
					<Title>Base Exp</Title>
				</Cell>
			</Row>
		</OverviewContainer>
	}
}

export default Overview;
