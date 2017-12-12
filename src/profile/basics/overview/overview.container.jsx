import { connect } from 'react-redux';
import { requestPokemonProfile } from '../../profile.actions.js';
import Overview from './overview.jsx';

const mapStateToProps = (state) => ({
	id: state.profile.overview.id,
	height: state.profile.overview.height,
	weight: state.profile.overview.weight,
	baseExperience: state.profile.overview.baseExperience,
	baseHappiness: state.profile.overview.baseHappiness,
	abilities: state.profile.abilities
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);