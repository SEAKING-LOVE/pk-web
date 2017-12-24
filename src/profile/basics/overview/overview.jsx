import React, { Component } from 'react';
import { leadingZeros } from '../../../utils.js';
import { OverviewTable, Row, Cell, Title, Subtitle, smallSubtitle } from './overview.styles.jsx'

class Overview extends Component {
	renderAbilities() {
		return this.props.abilities.map( ability => this.renderAbility(ability))
	}
	renderAbility(ability) {
		return <Subtitle key={ability.id} className={ability.hidden ? smallSubtitle : ''}>
			{ability.name} {ability.hidden ? '(hidden)' : ''}
		</Subtitle>
	}
	renderOverviewTable() {
		return <OverviewTable className='overview'>
			<Row>
				<Cell>
					<Subtitle>{this.props.height}M</Subtitle>
					<Title>Height</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.weight}KG</Subtitle>
					<Title>Weight</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.captureRate}</Subtitle>
					<Title>catch rate</Title>
				</Cell>	
			</Row>
			<Row>
				<Cell>
					<Subtitle>{this.renderAbilities()}</Subtitle>
					<Title>Ability</Title>
				</Cell>
				<Cell>
					<Subtitle>{this.props.baseExperience}</Subtitle>
					<Title>Experience</Title>
				</Cell>
				<Cell>
					<Subtitle> {this.props.baseHappiness} </Subtitle>
					<Title>Happiness</Title>
				</Cell>
			</Row>
			
		</OverviewTable>
	}
	render() {
		return this.renderOverviewTable();
	}
}

export default Overview;
