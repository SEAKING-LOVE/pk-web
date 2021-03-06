import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../../themes/themes.js';

export const StatsContainer = styled('div')`
	background-color: ${Colors.white};
	padding: 15px 20px;
	color: ${Colors.darkGrey};
	border-radius: 0.4em;
	box-shadow: 0px 3px 5px 2px ${Colors.shadow};
`;

export const Row = styled('div')`
	display: grid;
	frid-auto-flow: column;
	grid-template-columns: 5em 1fr 5em;
	justify-content: space-evenly;
	align-items: center;
	margin: 0.3em;

	> div {
		box-sizing: border-box;
		padding: 0.2em;
	}
`;

export const Divider = styled('hr')`
	border-color: ${Colors.white};
`;

export const Label = styled('div')`
	flex: 1;
	text-align: left;
	text-transform: uppercase;
	font-family: ${Fonts.titleFamily};
	font-weight: ${Fonts.bold};
	letter-spacing: 2px;
	font-size: 0.8em;
`;

export const ProgressBar = styled('div')`
	flex: 10;
	height: 1.2em;
	border-radius: 1em;
`;

export const Background = styled('div')`
	height: inherit;
	background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	border-radius: 1em;
`;

export const Bar = styled('div')`
	height: inherit;
	background-image: ${Colors.gradient.cool};
	border-radius: 1em;
	color: white;
	transition: all 0.3s;
`;

export const totalBar = css`
	background-image: ${Colors.gradient.warm};
`;
