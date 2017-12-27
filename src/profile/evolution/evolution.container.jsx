import { connect } from 'react-redux';
import { requestAllPokemon, requestUpdateSelectedId } from '../../list/list.actions.js';
import Evolution from './evolution.jsx';

const mapStateToProps = (state) => ({
	chain: state.profile.evolutions,
	selectedId: state.list.selectedId
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestUpdateSelectedId: (id) => dispatch(requestUpdateSelectedId(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Evolution);
