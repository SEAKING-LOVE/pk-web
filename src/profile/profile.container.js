import { connect } from 'react-redux';
import * as Actions from './profile.actions.js';
import Profile from './profile.jsx';

const stateToProps = (state) => ({
	selectedId: state.list.selectedId
});

const dispatchToProps = (dispatch) => {
	return {
		fetchStats: (id) => dispatch( Actions.fetchStats(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Profile);

export default Container;
