import React, { Component } from 'react';
import AnimateOut from './animation.js';
import { container, pokeball, Author, text } from './splash.styles.js';

class Splash extends Component {
	authors = {
		pia: 'https://github.com/misspia',
		jason: 'https://github.com/iFallUpHill'
	};
	renderIntructions() {
		return <div
			ref={(ref) => this.instructions = ref}
			className={text}>
			Click to enter
		</div>
	}
	renderPokeball() {
		return <div 
			className={pokeball}
			ref={(ref) => this.pokeball = ref}
			onClick={() => this.startAnimation()}></div>
	}
	renderAuthors() {
		return <div 
			ref={(ref) => this.authors = ref}
			className={text}>
			Created by {this.renderAuthor('pia')} and {this.renderAuthor('jason')}
		</div>
	}
	renderAuthor(name) {
		const url = this.authors[name];
		return <Author href={url}>
			{name}
		</Author>
	}
	startAnimation() {
		AnimateOut(this.container, this.pokeball, this.instructions, this.authors);
	}

	render() {
		return <div className={container} ref={(ref) => this.container = ref}>
			{this.renderIntructions()}
			{this.renderPokeball()}
			{this.renderAuthors()}
		</div>
	}
}

export default Splash;