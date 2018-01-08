import styled, { css } from 'react-emotion';
import { Colors } from '../themes/themes.js';

const outlineWidth = '0.2em';
const transitionCurve = 'cubic-bezier(1, -0.27, 0.52, 1.81)';

export const Container = styled('div')`
	z-index: 999;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;
	background: ${Colors.gradient.red}

`;

export const Text = styled('div')`
	margin-bottom: 2em;
	color: ${Colors.white};
	letter-spacing: 0.1em;
`;

export const Pokeball = styled('div')`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	height: 9em;
	width: 9em;
	border-radius: 50%;
	border: ${outlineWidth} solid ${Colors.white};
	
	cursor: pointer;
	transition: all 0.2s ${transitionCurve};

	&:before, &:after {
		content: '';
		display: block;
	}
	&:before {
		width: 100%;
		height: ${outlineWidth};
		background-color: ${Colors.white};
	}

	&:after {
		position: absolute;
		width: 10%;
		height: 10%;
		border-radius: 50%;
		background-color: ${Colors.white};
	}
	&:hover {
		box-shadow: 0 0 3em 0.5em ${Colors.white};
	}
`;




