import { connect } from 'react-redux';
import Stats from './stats.jsx';

const stateToProps = (state) => ({
	selectedId: state.list.selectedId,
	hp: state.profile.stats.hp,
	attack: state.profile.stats.attack,
	defense: state.profile.stats.defense,
	specialAttack: state.profile.stats.specialAttack,
	specialDefense: state.profile.stats.specialDefense,
	speed: state.profile.stats.speed,
});

const dispatchToProps = (dispatch) => {
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Stats);

export default Container;
