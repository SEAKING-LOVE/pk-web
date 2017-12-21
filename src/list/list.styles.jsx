import styled, { css } from 'react-emotion';
import { Colors } from '../themes/themes.js';


export const ListContainer = styled('div')`
	border: solid black 1px;
	height: 100vh;
	width: 500px;
	overflow-y: scroll;
	div {
		margin: 0.5em 0;
	}
`;