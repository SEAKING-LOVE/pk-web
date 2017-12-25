import React, { Component } from 'react';
import { Colors } from '../../themes/themes.js';
import { StageCell, sprite, StageName, Conditions } from './evolution.styles.jsx'

class Stage extends Component {
	constructor(props) {
		super(props);
	}
	static defaultProps = {
	  pkmn: {}
	}
	renderSprite() {
		return <div className={`${sprite} pki n${this.props.pkmn.id}`}></div>;
	}
	renderName() {
		return <StageName>{this.props.pkmn.name}</StageName>
	}
	renderConditions() {
		if(this.props.pkmn.predecessorId == null) return;
		const conditionsData = this.getConditions();
		const conditions = Object.keys(conditionsData).map((key, index) => {
			const conditionValues = conditionsData[key];
			return <div key={index}>
				{key}: {conditionValues.join(', ')}
			</div>
		})
		
		return <Conditions>
			{conditions}
		</Conditions>
	}
	getConditions() {
		let conditions = {};
		Object.keys(this.props.pkmn).forEach((conditionName, index) => {
			const conditionValue = this.props.pkmn[conditionName];
			if(this.useCondition(conditionName, conditionValue)) {
				const formattedConditionName = this.parseCamelCase(conditionName);
				if(formattedConditionName == 'Known Move Type Id') console.log(conditionName);
				conditions[formattedConditionName] = conditionValue;
			}
		});
		return conditions;

	}
	useCondition(conditionName, conditionValue) {
		const ignoredFields = ['chainId', 'genderId', 'id', 'name', 'predecessorId', 'triggerMethod', 'knownMoveTypeId'];
		return ignoredFields.indexOf(conditionName) == -1 && conditionValue[0];
	}
	parseCamelCase(string) {
		return string
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase());
	}
	render() {
		return <StageCell>
			{this.renderName()}
			{this.renderSprite()}
			{this.renderConditions()}
		</StageCell>
	}
}

export default Stage;
