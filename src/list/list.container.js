import { connect } from 'react-redux';
import List from './list.jsx';

const stateToProps = (state) => ({
	test: 'supp'
});

const dispatchToProps = (dispatch) => {
	return {
		testFn: () => { console.log('TEST FN'); }
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(List);

export default Container;
