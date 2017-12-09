import React, { Component } from 'react';
import Stats from '../stats/stats.container.jsx';
import { leadingZeros } from '../../utils.js';
import { OverviewTable, Row, Cell, Title, Subtitle, Subtype, Subnumber } from './overview.styles.jsx'

class Overview extends Component {
	renderAbilities() {
		return this.props.abilities.map( ability => {
			return <Subtype key={ability.id}>{ability.name}</Subtype>
		})
	}
	renderOverviewTable() {
		return <OverviewTable className='overview'>
			<Row>
				<Cell>
					<Subtitle>{leadingZeros(this.props.id)}</Subtitle>
					<Title>National No</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.renderAbilities()}</Subtitle>
					<Title>Ability</Title>
				</Cell>
				<Cell>
					<Subtitle> {this.props.baseHappiness} </Subtitle>
					<Title>Base Happiness</Title>
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
		</OverviewTable>
	}
	render() {
		return <div>
			{this.renderOverviewTable()}
			<Stats/>
		</div>
	}
}

export default Overview;
