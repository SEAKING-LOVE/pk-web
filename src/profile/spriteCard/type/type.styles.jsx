import styled, { css } from 'react-emotion';
import { Colors } from '../../../themes/themes.js';

const badgeHeight = '1.5em';

export const containerShape = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${badgeHeight};
	width: ${badgeHeight};
	padding: 0.5em;
	border-radius: 50%;
	box-shadow: 3px 3px 0.5em ${Colors.shadow};
`;

export const TypeIcon = styled.img`
	height: 100%;
	width: auto;
`;



