import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js';

export const Container = styled('div')`
	margin-bottom: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background: radial-gradient(ellipse at center bottom,#2cc7d0 10%,#1570ca 50%);
	border-radius: 0.5em;
	color: #fff;
`;

export const Artwork = styled.img`
	height: 300px;
	width: auto;
`;