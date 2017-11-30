import React, { Component } from 'react';
import { StatsContainer, Row, Background, Bar, TotalBar, Divider, ProgressName, ProgressBar } from './stats.styles.jsx'

class Stats extends Component {
	render() {
		let totalStats = 0;

		return <StatsContainer className='stats'>
			{
				this.props.stats.map( stat => {
					totalStats += stat.value
					return (
						<Row key={stat.name}>
							<ProgressName>
								{stat.name}
							</ProgressName>
							<ProgressBar>
								<Background>
									<Bar style={{width: stat.value * 100 / 255 + '%'}}> {stat.value}</Bar>
								</Background>
							</ProgressBar>
						</Row>
					);
				})
			}
			<Divider />
			<Row>
				<ProgressName>
					Total
				</ProgressName>
				<ProgressBar>
					<Background>
						<TotalBar style={{width: totalStats * 100 / 1530 + '%'}}> {totalStats}</TotalBar>
					</Background>
				</ProgressBar>
			</Row>
		</StatsContainer>
	}
}

export default Stats;
