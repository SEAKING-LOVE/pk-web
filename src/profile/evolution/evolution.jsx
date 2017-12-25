import React, { Component } from 'react';
import Stage from './stage.jsx';
import { EvolutionContainer, ColumnRow, Row, Column, NoEvolution } from './evolution.styles.jsx'

class Evolution extends Component {

	formatEvolutionChainData() {
		let base = {};

		this.props.chain.forEach(pkmn => {
			if(pkmn.predecessorId === null) base = pkmn;
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
	renderChain() {
		let chain = this.formatEvolutionChainData();
		if (this.evoChainExists(chain)) return this.renderNoEvoChain();

		const hasStage2 = (chain['next'] && chain['next'].length > 0);
		const hasStage3 = chain['next'] ? this.stage3Exists(chain) : false;

		const baseClassNames = (hasStage2 ? 'hasStage2-before ' : '') + (hasStage3 ? 'hasStage3-before' : '')

		return (
			<EvolutionContainer className='evolution'>
				<ColumnRow>
					<Row>
						<Column className={"containsPkmn " + baseClassNames}>
							<Stage pkmn={chain} />
						</Column>
						{hasStage2 ? this.renderAdditionalStages(chain, hasStage2, hasStage3) : null}
					</Row>
				</ColumnRow>
			</EvolutionContainer>
		)
	}
	evoChainExists(chain) {
		return !Object.keys(chain).length;
	}
	stage3Exists(chain) {
		for(let i = 0; i < chain['next'].length; i++) {
			if(chain['next'][i]['next'].length > 0) return true;
		}
		return false;
	}
	renderNoEvoChain() {
		return <EvolutionContainer className='evolution'>
			<NoEvolution>This Pokémon has no evolution chain.</NoEvolution>
		</EvolutionContainer>
	}

	renderAdditionalStages(chain, hasStage2, hasStage3) { //stage 2 and 3
		const stage2ClassNames = hasStage2 ? hasStage3 ? 'hasStage2-after' : 'hasStage2-before' : '';
		const nextStage = chain['next'].map( (intermediate, intermediateIndex) => {
			const pkmn = chain['next'][intermediateIndex];
			const stage = pkmn['next'] ? this.renderStage3(chain, hasStage3, intermediateIndex) : null;
			return (
				<Row key={chain['next'][intermediateIndex].id}>
					<Column className={"containsPkmn " + (hasStage3 ? 'hasStage3-after' : '')}>
						<Stage pkmn={pkmn} />
					</Column>
					{stage}
				</Row>
			)
		})
		return <Column className={stage2ClassNames}>
			<ColumnRow>
				{nextStage}
			</ColumnRow>
		</Column>;
	}
	renderStage3(chain, hasStage3, intermediateIndex) {
		const nextStage = chain['next'][intermediateIndex]['next'].map( (final, finalIndex) => {
			const pkmn = chain['next'][intermediateIndex]['next'][finalIndex];
			return (
				<Row key={pkmn.id}>
					<Column className="containsPkmn">
						<Stage pkmn={pkmn} />
					</Column>
				</Row>
			)
		})
		return <Column className={hasStage3 ? 'hasStage3-after' : ''}>
				<ColumnRow>
					{nextStage}
				</ColumnRow>
			</Column>
	}
	render() {
		return this.renderChain();
	}
}

export default Evolution;
