import React, { Component } from 'react';
import { leadingZeros } from '../../utils.js';
import { OverviewContainer, Row, Cell, Title, Subtitle, Subtype, Subnumber } from './overview.styles.jsx'

class Overview extends Component {
	render() {
		return <OverviewContainer className='overview'>
			<Row>
				<Cell>
					<Title>National Dex #</Title>
					<Subtitle>{leadingZeros(this.props.id)}</Subtitle>
				</Cell>
				<Cell>
					<Title>Pokemon Name</Title>
					<Subtitle>{this.props.name}</Subtitle>
				</Cell>
				<Cell>
					<Title>Type</Title>
					<div>
					{this.props.types.map( type => {
						return <Subtype key={type.id}>{type.name}</Subtype>;
					})}
				</div>
				</Cell>
			</Row>
			<Row>
				<Cell>
					<Title>Height</Title>
					<Subnumber>{this.props.height}m</Subnumber>
				</Cell>
				<Cell>
					<Title>Weight</Title>
					<Subnumber>{this.props.weight}kg</Subnumber>
				</Cell>
				<Cell>
					<Title>Base Experience</Title>
					<Subnumber>{this.props.baseExperience}</Subnumber>
				</Cell>
			</Row>
		</OverviewContainer>
	}
}

export default Overview;
