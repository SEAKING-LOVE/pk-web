import React, { Component } from 'react';
import { StatsContainer, Row, Background, Bar, totalBar, Divider, Label, ProgressBar } from './stats.styles.jsx'

class Stats extends Component {
	renderStatBars() {
		return this.props.stats.map( stat => {
			return this.renderStatBar(stat.name, stat.value);
		});
	}
	renderStatBar(label, value) {
		const width = `${value * 100 / 255}%`;
		return <Row key={label}>
				<Label> {label} </Label>
				<ProgressBar>
					<Bar style={{ width }}> </Bar>
				</ProgressBar>
				<Label>{value}</Label>
			</Row>
	}
	renderTotalSection() {
		const totalStats = this.sumStats();
		return <Row>
			<Label>Total</Label>
			<ProgressBar>
				{this.renderTotalBar(totalStats)}
			</ProgressBar>
			<Label>{totalStats}</Label>
		</Row>
	}
	renderTotalBar(total) {
		const width = `${total * 100 / 1530}%`;
		return <Bar style={{width}} className={totalBar} />
	}
	sumStats() {
		return this.props.stats.reduce((acc, curr) => {
			return acc + curr.value;
		}, 0);
	}
	render() {
		return <StatsContainer className='stats'>
			{this.renderStatBars()}
			<Divider />
			{this.renderTotalSection()}
		</StatsContainer>
	}
}

export default Stats;
