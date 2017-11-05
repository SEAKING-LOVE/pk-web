import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InputPreview from '../components/InputPreview';
//import { setMessage } from '../actions/message';
import { SET_MESSAGE_REQUEST } from '../types/message';

import Hello from '../styles/app.js';

class App extends React.Component {
	_onChange = value => {
		//this.props.dispatch(setMessage(value))
		this.props.dispatch({type: SET_MESSAGE_REQUEST, payload: {message: value}})
	}
	renderLink() {
		return <Link to="/about">
				<button>About</button>
			</Link>;
	}
	renderInput() {
		const { message } = this.props.messageReducer;
		return <InputPreview 
				value={message} 
				onChange={this._onChange} />
	}
	render() {
		return <div>
			<Hello>Hello from React!</Hello>
			{this.renderInput()}
			{this.renderLink()}
		</div>
	}
}

export default connect(state => state)(App);