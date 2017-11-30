import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js';

export const StatsContainer = styled('div')`
	background-color: ${Colors.white};
	padding: 10px;
	color: ${Colors.darkGrey};
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
	border-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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

// background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
	background-color: ${Colors.lightBlue};
	border-radius: 1em;
	color: white;
`;

export const totalBar = css`
	background-color: ${Colors.pink};
`;
