import React, { Component } from 'react';

class Evolution extends Component {

	render() {
		const stage1 = [];
		const stage2 = [];
		const stage3 = [];

		this.props.chain.forEach(pkmn => {
			if(pkmn.predecessorId === null) {
				stage1.push(pkmn)
			}
		})

		this.props.chain.forEach(nextPkmn => {
			stage1.forEach(pkmn => {
				if(nextPkmn.predecessorId === pkmn.id) {
					stage2.push(nextPkmn)
				}
			})
		})

		this.props.chain.forEach(nextPkmn => {
			stage2.forEach(pkmn => {
				if(nextPkmn.predecessorId === pkmn.id) {
					stage3.push(nextPkmn)
				}
			})
		})

		return <div className='evolution'>
			Evolution component
			{stage1.map(pkmn => {
				return <div key={pkmn.id + '-' + pkmn.name}>{pkmn.name}</div>
			})}
			{stage2.map(pkmn => {
				return <div key={pkmn.id + '-' + pkmn.name}>{pkmn.name}, prev: #{pkmn.predecessorId}, {pkmn.triggerMethod}</div>
			})}
			{stage3.map(pkmn => {
				return <div key={pkmn.id + '-' + pkmn.name}>{pkmn.name}, prev: #{pkmn.predecessorId}, {pkmn.triggerMethod}</div>
			})}
			
		</div>
	}
}

export default Evolution;

// fragments
			// {this.props.chain.map(pkmn => {
			// 	if(pkmn.predecessorId === null) {
			// 		return <span>{pkmn.name}</span>
			// 	}
			// })}
// {JSON.stringify(this.props.chain)}
// {this.props.chain.map(pkmn => {
// return <span>{pkmn.name}</span>
// })}