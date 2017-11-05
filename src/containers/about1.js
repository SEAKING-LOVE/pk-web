import { connect } from 'react-redux';
import About from '../components/about.js';

import { requestTestApiData } from '../actions/test_for_api';

const mapStateToProps = (state) => ({
	data: state['testForApiReducer']
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestTestApiData: () => dispatch( requestTestApiData() )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);