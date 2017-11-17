import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Overview from './overview.jsx';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);