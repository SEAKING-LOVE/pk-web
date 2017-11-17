import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Evolution from './Evolution.jsx';

const mapStateToProps = (state) => ({
	chain: state.profile.evolutions
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Evolution);