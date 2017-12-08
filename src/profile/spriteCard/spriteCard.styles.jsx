import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js';

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
	padding: 2em 2em 0em;
	width: 200px;
	height: auto;
`;

export const Footer = styled('div')`
	display: flex;
	width: 100%;
`;

export const Sprite = styled.img`
	padding: 0.5em;
	image-rendering: pixelated;
	height: 100px;
`;

export const NationalNo = styled('div')`
	padding: 0.5em;
	border-radius: 2em;
	background-color: ${Colors.white};
	color: ${Colors.black};
	box-shadow: 3px 3px 0.5em ${Colors.shadow};
`;