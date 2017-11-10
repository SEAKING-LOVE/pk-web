import { connect } from 'react-redux';
import Profile from './profile.jsx';

const stateToProps = (state) => ({
	test: '~~~~~~'
});

const dispatchToProps = (dispatch) => {
	return {
		testFn: () => { console.log('????????'); }
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Profile);

export default Container;
