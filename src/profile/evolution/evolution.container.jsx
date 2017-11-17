import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Evolution from './Evolution.jsx';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Evolution);