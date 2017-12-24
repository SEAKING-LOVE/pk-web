import React, { Component } from 'react';
import Stage from './stage.jsx';

import { EvolutionContainer, ColumnRow, Row, Column, NoEvolution } from './evolution.styles.jsx'


class Evolution extends Component {

	formatEvolutionChainData() {
		let base = {};

		this.props.chain.forEach(pkmn => {
			if(pkmn.predecessorId === null) {
				base = pkmn;
			}
		})

		if (this.props.chain.length > 1) {
			base['next'] = [];

			this.props.chain.forEach(nextPkmn => {
				if(nextPkmn.predecessorId === base.id) {
					base['next'].push({...nextPkmn, next: []});
				}
			})

			this.props.chain.forEach(nextPkmn => {
				base['next'].forEach( (nextStage, index) => {
					if(nextPkmn.predecessorId === base['next'][index].id) {
						base['next'][index]['next'].push(nextPkmn);
					}
				})
			})
		}

		return base;
	}

	render() {
		let chain = this.formatEvolutionChainData();

		if (!Object.keys(chain).length) {
			return (<EvolutionContainer className='evolution'>
						<NoEvolution>This Pokémon has no evolution chain.</NoEvolution>
					</EvolutionContainer>);
		}


		const hasStage2 = (chain['next'] && chain['next'].length > 0);
		let hasStage3 = false;

		if(chain['next']) {
			chain['next'].forEach( potentialNextPkmn => {
				if (potentialNextPkmn['next'].length > 0) {
					hasStage3 = true;
				}
			})
		}

		return (<EvolutionContainer className='evolution'>
			<ColumnRow>
				<Row>
					<Column className={"containsPkmn " + (hasStage2 ? 'hasStage2-before ' : '') + (hasStage3 ? 'hasStage3-before' : '')}>
						<Stage pkmn={chain} />
					</Column>
					{(chain['next']) 
					? <Column className={hasStage2 ? hasStage3 ? 'hasStage2-after' : 'hasStage2-before' : ''}>
						<ColumnRow>
							{ chain['next'].map( (intermediate, intermediate_index) => {
								return (
									<Row key={chain['next'][intermediate_index].id}>
										<Column className={"containsPkmn " + (hasStage3 ? 'hasStage3-after' : '')}>
											<Stage pkmn={chain['next'][intermediate_index]} />
										</Column>
										{(chain['next'][intermediate_index]['next']) 
										? <Column className={hasStage3 ? 'hasStage3-after' : ''}>
											<ColumnRow>
												{ chain['next'][intermediate_index]['next'].map( (final, final_index) => {
													return (
														<Row key={chain['next'][intermediate_index]['next'][final_index].id}>
															<Column className="containsPkmn">
																<Stage pkmn={chain['next'][intermediate_index]['next'][final_index]} />
															</Column>
														</Row>
													)
												})
												}
											</ColumnRow>
										</Column>
										: ''}
									</Row>
								)
							})
							}
						</ColumnRow>
					</Column>
					: ''}
				</Row>
			</ColumnRow>
		</EvolutionContainer>)
	}
}

export default Evolution;