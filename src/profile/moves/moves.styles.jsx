import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js'; 

export const Nav = styled('div')`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0.4em;
  height: 3em;
  width: 100%;
  box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  border-radius: 0.4em;
`;

export const NavHeader = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: ${Fonts.bodyFamily};
  font-weight: ${Fonts.bold};
  text-transform: uppercase;
  color: ${Colors.darkGrey};
  border-bottom: solid transparent 0.2em;
  border-top: solid transparent 0.2em;
  cursor: pointer;
  transition: all 0.3s;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const activeTab = css`
  color: ${Colors.lightBlue};
  border-bottom-color: ${Colors.lightBlue};
`;

export const MoveContainer = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 0.8em 1.6em;
	box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  	border-radius: 0.4em;
  	overflow-x: auto;
`;

export const MoveRow = styled('div')`
	display: flex;
  	min-width: 640px;
`;

export const MoveLevel = styled('div')`
	flex: 1;
	text-align: right;
	padding: 0.4em;

	&.header {
		font-family: ${Fonts.titleFamily};
		font-weight: bold;
	}
`;

export const MoveName = styled('div')`
	flex: 4;
	padding: 0.4em;

	&.header {
		font-family: ${Fonts.titleFamily};
		font-weight: bold;
	}

	@media (max-width: 912px) {
		flex: 2;
	}
`;

export const MoveGeneric = styled('div')`
	flex: 1;
	padding: 0.4em;
	text-align: center;

	&.header {
		font-family: ${Fonts.titleFamily};
		font-weight: bold;
	}
`;

export const TypeBadge = styled('span')`
	color: ${Colors.white};
	padding: 0.3em 0.5em;
	font-size: 0.75em;
	border-radius: 0.2em;
	text-transform: uppercase;
`;


