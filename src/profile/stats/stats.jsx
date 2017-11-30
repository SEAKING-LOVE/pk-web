import React, { Component } from 'react';
import { StatsContainer, Row, Background, Bar, TotalBar, Divider, ProgressName, ProgressBar } from './stats.styles.jsx'

class Stats extends Component {
	renderStatBars() {
		return this.props.stats.map( stat => {
			return this.renderStatBar(stat.name, stat.value);
		});
	}
	renderStatBar(label, value) {
		const width = `${value * 100 / 255}%`;
		return <Row key={label}>
				<ProgressName> {label} </ProgressName>
				<ProgressBar>
					<Background>
						<Bar style={{ width }}> {value}</Bar>
					</Background>
				</ProgressBar>
			</Row>
	}
	renderTotalSection() {
		return <Row>
			<ProgressName>
				Total
			</ProgressName>
			<ProgressBar>
				<Background>
					{this.renderTotalBar()}
				</Background>
			</ProgressBar>
		</Row>
	}
	renderTotalBar() {
		const totalStats = this.sumStats();
		return <TotalBar style={{width: totalStats * 100 / 1530 + '%'}}>
			{totalStats}
		</TotalBar>;
	}
	sumStats() {
		return this.props.stats.reduce((acc, curr) => {
			return acc + curr.value;
		}, 0);
	}
	render() {
		let totalStats = 0;

		return <StatsContainer className='stats'>
			{this.renderStatBars()}
			<Divider />
			{this.renderTotalSection()}
		</StatsContainer>
	}
}

export default Stats;
