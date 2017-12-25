import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../themes/themes.js';


export const container = css`
	margin-right: 0.5em;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 1em;
	position: fixed;
	width: 400px;
	height: 100vh;
	border-right: solid 1px ${Colors.shadow};
	transition: 0.3s all;
	z-index: 1;
	background-color: #fff;
`;

export const MenuToggler = styled('div')`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 0.5em;
	box-sizing: border-box;
	font-size: 2em;
	height: 1.5em;
	color: white;
	background-color: ${Colors.pink};
	cursor: pointer;
	transition: 0.3s all;
	:hover {
		box-shadow: 2px 2px 3px 1px ${Colors.shadow};
	}
	&.open {
		width: 100%;
	}
`;

export const SearchContainer = styled('div')`
	box-sizing: border-box;
	margin-bottom: 0.5em;
	width: 100%;
	height: 3em;
	padding: 0.5em;
	border-bottom: solid 0.2em ${Colors.lightBlue};
	input {
		height: 100%;
		width: 100%;
		font-size: 1.2em;
		border: 0;
		:focus, :active {
			outline: none;
		}
		::placeholder {
			font-family: ${Fonts.titleFamily};
		}
	}
`;

export const ListContainer = css`
	position: relative;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	div {
		margin: 0.5em 0;
	}
`;
