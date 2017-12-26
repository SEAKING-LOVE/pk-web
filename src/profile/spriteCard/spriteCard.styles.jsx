import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js';

const badgeHeight = '1.5em';
const largeBadgeHeight = '2em';

export const Container = styled('div')`
	margin-bottom: 1em;
	padding: 1em;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background: radial-gradient(ellipse at center bottom,#2cc7d0 10%,#1570ca 50%);
	border-radius: 0.5em;
	color: ${Colors.white};
  	box-shadow: 0px 3px 5px 2px ${Colors.shadow};
`;

export const Title = styled('div')`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 1.2em;
	opacity: 0.9;
`;

export const Artwork = styled.img`
	image-rendering: pixelated;
	padding: 2em 2em 1.5em;
	height: 200px;
	width: auto;
`;

export const Footer = styled('div')`
	display: flex;
	width: 100%;
	justify-content: space-between;
	div {
		display: flex;
		div {
			align-items: center;
		}
	}
	div:first-child {
		div:not(:first-child) {
			margin-left: 1em;
		}
	}
`;

export const NationalNo = styled('div')`
	padding: 0.5em 1em;
	height: ${badgeHeight};
	border-radius: 2em;
	background-color: ${Colors.white};
	color: ${Colors.black};
	box-shadow: 3px 3px 0.5em ${Colors.shadow};
`;

export const Footprint = styled('div')`
	padding: 0.5em;
	height: ${badgeHeight};
	width: ${badgeHeight};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${Colors.lightBlue};
	box-shadow: 3px 3px 0.5em ${Colors.shadow};

	img {
		height: 110%;
		width: auto;
		image-rendering: pixelated;
	}
`;

export const TypeContainer = styled('div')`
	display-flex
`;
