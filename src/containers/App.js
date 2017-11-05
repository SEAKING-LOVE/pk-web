import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css, injectGlobal } from 'react-emotion';

import InputPreview from '../components/InputPreview';
//import { setMessage } from '../actions/message';
import { SET_MESSAGE_REQUEST } from '../types/message';

const Hello = styled('div')`
	height: 100px;
	width: 200px;
	color: red;
	background: blue;
	text-align: center;
`

class App extends React.Component {
	_onChange = value => {
		//this.props.dispatch(setMessage(value))
		this.props.dispatch({type: SET_MESSAGE_REQUEST, payload: {message: value}})
	}

	render() {
		const { message } = this.props.messageReducer;
		
		return (
			<div>
				<Hello>Hello from React!</Hello>
				<InputPreview 
					value={message} 
					onChange={this._onChange}
				/>
				<Link to="/about">
					<button>About</button>
				</Link>
			</div>
		);
	}
}

export default connect(state => state)(App);