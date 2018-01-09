import { TimelineMax, Power0, Power4, Sine } from 'gsap';

const AnimateOut = (container, pokeball, instructions, authors) => {
	const tl = new TimelineMax();
	tl
	.to(authors, 0.5, {autoAlpha: 0, y: 20})
	.to(instructions, 0.5, {autoAlpha: 0, y: -20}, '-=0.5')
	.to(pokeball, 1, {ease: Sine.easeIn, height: 0, width: 0})
	.to(pokeball, 1, {ease: Sine.easeIn, width: '100%'}, '-=0.1')
	.to(container, 0.8, {autoAlpha: 0})
	.to(container, 0.1, {display: 'none'});
}

export default AnimateOut;