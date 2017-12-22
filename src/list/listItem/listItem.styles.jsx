import styled, { css } from 'react-emotion';
import { Colors, Images } from '../../themes/themes.js';
import { sprites } from './sprites.js';

const borderWidth = '0.3em';

const containerHover = css`
	:after {
		content: '';
		width: 100%;
		background: ${Colors.pink};
		position: absolute;
		left: -100%;
		bottom: 0;
		top: 0;
		transition: all .3s ease-in-out;
		z-index: -1;
	}
	:hover {
		letter-spacing: 0.3em;
		&:after {
			left: calc(100% - ${borderWidth});
		}
	}
`;

export const Container = styled('div')`
	display: flex;
	align-items: center;
	padding: 0 0.5em;
	position: relative;
	height: 4.5em;
	border-left: ${borderWidth} solid ${Colors.pink};
	overflow: hidden;

	cursor: pointer;
	transition: all 0.3s;

	div:not(:first-child) {
		margin-left: 0.5em;
	}
	${containerHover}
	${sprites}
`;

const text = css`
	letter-spacing: 1px;
`;

export const Name = styled('div')`
	${text}
	text-transform: capitalize;
`;

export const sprite = css`
	background-image: url(${Images.spritesheet});
	width: 40px;
	height: 30px;
	vertical-align: middle;
	display: inline-block;

`;

