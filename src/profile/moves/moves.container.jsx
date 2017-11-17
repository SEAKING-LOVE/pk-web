import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Moves from './moves.jsx';

const mapStateToProps = (state) => ({
	machine: state.profile.moves.machine,
	levelUp: state.profile.moves['level-up'],
	egg: state.profile.moves.egg,
	tutor: state.profile.moves.tutor,
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Moves);