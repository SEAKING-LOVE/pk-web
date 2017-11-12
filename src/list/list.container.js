import { connect } from 'react-redux';
import * as Actions from './list.actions.js';
import List from './list.jsx';

const stateToProps = (state) => ({
	list: state.list.rawList
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAll: () => dispatch( Actions.fetchAllPokemon() ),
		selectPk: (id) => dispatch( Actions.updateSelectedId(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(List);

export default Container;
