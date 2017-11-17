import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import Overview from './overview.jsx';

const mapStateToProps = (state) => ({
	id: state.profile.overview.id,
	name: state.profile.overview.name,
	height: state.profile.overview.height,
	weight: state.profile.overview.weight,
	baseExperience: state.profile.overview.baseExperience,
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);