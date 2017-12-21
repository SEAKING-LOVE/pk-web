import styled, { css } from 'react-emotion';
import { Colors } from '../../themes/themes.js';

const containerHover = css`
	:hover {
		background-color: ${Colors.pink};
		color: rgba(255, 255, 255, 0.8);
		box-shadow: -5px 5px 1px ${Colors.shadow};

	}
`;

export const Container = styled('div')`
	display: flex;
	align-items: center;
	padding: 0 0.5em;
	height: 4.5em;
	

	cursor: pointer;
	transition: all 0.3s;

	div:not(:first-child) {
		margin-left: 0.5em;
	}
	${containerHover}
`;

const text = css`
	letter-spacing: 1px;
`;

export const Name = styled('div')`
	${text}
	text-transform: capitalize;
}
`;