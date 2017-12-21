import styled, { css } from 'react-emotion';
import { Colors } from '../themes/themes.js';


export const Container = styled('div')`
	border: solid black 1px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 1em;
	height: 100vh;
	width: 500px;
`;

export const MenuToggler = styled('div')`

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
	}
`;

export const ListContainer = styled('div')`
	flex: 1;
	width: 100%;
	overflow-y: scroll;
	div {
		margin: 0.5em 0;
	}
`;

