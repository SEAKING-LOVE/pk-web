import { connect } from 'react-redux';
import { requestPokemonProfile } from './profile.actions.js';
import Profile from './profile.jsx';

const mapStateToProps = (state) => ({
	selectedId: state.list.selectedId
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestPokemonProfile: (id) => dispatch( requestPokemonProfile(id) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);