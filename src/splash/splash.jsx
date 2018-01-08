import React, { Component } from 'react';
import { Container, Pokeball, Text } from './splash.styles.js';

class Splash extends Component {
	render() {
		return <Container>
			<Text>Click to enter</Text>
			<Pokeball></Pokeball>
		</Container>
	}
}

export default Splash;