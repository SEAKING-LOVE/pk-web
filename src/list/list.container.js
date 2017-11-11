import { connect } from 'react-redux';
import * as Actions from './list.actions.js';
import List from './list.jsx';

const stateToProps = (state) => ({
	test: 'supp'
});

const dispatchToProps = (dispatch) => {
	return {
		testFn: () => { console.log('TEST FN'); },
		fetchAll: () => dispatch( Actions.fetchAllPokemon() )

	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(List);

export default Container;
