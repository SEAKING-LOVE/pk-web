import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Moves from './moves.jsx';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Moves);