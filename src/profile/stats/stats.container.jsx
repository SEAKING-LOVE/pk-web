import { connect } from 'react-redux';
import Stats from './stats.jsx';

const stateToProps = (state) => ({
	selectedId: state.list.selectedId,
	stats: [
		{ 'name': 'hp',
		 	'value': state.profile.stats.hp
		},
		{ 'name': 'attack',
		 	'value': state.profile.stats.attack
		},
		{ 'name': 'defense',
		 	'value': state.profile.stats.defense
		},
		{ 'name': 'sp atk',
		 	'value': state.profile.stats.specialAttack
		},
		{ 'name': 'sp def',
		 	'value': state.profile.stats.specialDefense
		},
		{ 'name': 'speed',
		 	'value': state.profile.stats.speed
		},
	],
});

const dispatchToProps = (dispatch) => {
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Stats);

export default Container;
