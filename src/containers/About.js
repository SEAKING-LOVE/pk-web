import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestTestApiData } from '../actions/test_for_api';

class About extends React.Component {
	componentDidMount() {
		this.props.requestTestApiData();
	}

	person = (x, i) =>
	<div key={x.id.value}>
		<h1>
			{x.gender}
		</h1>
		<h1>
			{x.name.first}
		</h1>
		<h1>
			{x.name.last}
		</h1>
		<img src={x.picture.medium} />
	</div>;

	render () {
		const { results = [] } = this.props.data;

		return (results.length
			? 	<div>
					About
						<Link to='/'>
							<button>Go Home</button>
						</Link>

				 	<h1>
						{results.map(this.person)}
					</h1>
				</div>
			: 	<h1>Loading...</h1>
		);
	}
}

// I am almost 100% certain this is not* how you do this vvv
const mapStateToProps = state => ({ data: state['testForApiReducer'] });

const mapDispatchToProps = dispatch => bindActionCreators({ requestTestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);