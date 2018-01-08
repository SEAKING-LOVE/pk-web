import React, { Component } from 'react';
import { Container, Pokeball, Credit, Author, text } from './splash.styles.js';

class Splash extends Component {
	authors = [
		{
			name: 'pia',
			url: 'https://github.com/misspia'
		},
		{
			name: 'jason',
			url: 'https://github.com/iFallUpHill'
		}
	];

	renderAuthors() {
		return this.authors.forEach((author, index) => {
			return <Author href={author.url}>
				{author.name}
			</Author>
		})
	}
	render() {
		console.log(this.authors);
		return <Container>
			<div className={text}>Click to enter</div>
			<Pokeball></Pokeball>
			<Credit>
			dfsdfsd
				{this.renderAuthors()}
			</Credit>
		</Container>
	}
}

export default Splash;