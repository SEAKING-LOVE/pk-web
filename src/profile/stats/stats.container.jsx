import { connect } from 'react-redux';
import * as Actions from '../profile.actions.js';
import Stats from './stats.jsx';

const stateToProps = (state) => ({
	hp: state.profile.stats.hp,
	attack: state.profile.stats.attack,
	defense: state.profile.stats.defense,
	spAttack: state.profile.stats['special-attack'],
	spDefense: state.profile.stats['special-defense'],
	speed: state.profile.stats.speed,
});

const dispatchToProps = (dispatch) => {
	return {
		fetchStats: (id) => dispatch( Actions.fetchStats(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Stats);

export default Container;
