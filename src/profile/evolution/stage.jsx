import React, { Component } from 'react';
import { Colors } from '../../themes/themes.js';
import { StageCell, verticalCenter, StageName, Conditions, sprite, spriteScale } from './evolution.styles.jsx'

class Stage extends Component {
	static defaultProps = {
	  pkmn: {}
	}
	renderSprite() {
		return <div className={`${spriteScale} ${sprite} pki n${this.props.pkmn.id}`}></div>;
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
			if(this.usedCondition(conditionName, conditionValue)) {
				const formattedConditionName = this.parseCamelCase(conditionName);
				conditions[formattedConditionName] = conditionValue;
			}
		});
		return conditions;

	}
	usedCondition(conditionName, conditionValue) {
		const ignoredFields = ['id', 'name', 'next'];
		return ignoredFields.indexOf(conditionName) == -1 && !conditionName.includes('Id') && conditionValue[0];
	}
	parseCamelCase(string) {
		return string
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase());
	}
	containerClassName() {
		const conditionsExist = Object.keys(this.getConditions()).length > 0;
		const isBaseStage = this.props.pkmn.predecessorId == null;
		return (!conditionsExist || isBaseStage) ? verticalCenter : '';
	}
	render() {
		return <StageCell className={this.containerClassName()}>
			{this.renderName()}
			{this.renderSprite()}
			{this.renderConditions()}
		</StageCell>
	}
}

export default Stage;
