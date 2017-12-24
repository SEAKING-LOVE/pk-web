import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js'; 

export const EvolutionContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0.4em;
  width: 100%;
  box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  border-radius: 0.4em;
  font-family: ${Fonts.titleFamily};
`;

export const ColumnRow = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Column = styled('div')`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.containsPkmn {
  	background: ${Colors.lightBlue};
	color: ${Colors.white};
	text-transform: capitalize;
	border-radius: 0.4em;
	margin: 0.2em;
	width: 100%;
  }

  &.hasStage2-before {
  	width: 50%;
  }

  &.hasStage2-after {
  	width: 66.6666%;
  }

  &.hasStage3-before {
  	width: 33.3333%;
  }

  &.hasStage3-after {
  	width: 50%;
  }

`;

export const NoEvolution = styled('div')`
	padding: 0.8em 1.2em;
	width: 100%;
	text-align: center;
`;

export const StageCell = styled('div')`
	padding: 0.8em 1.2em;
`;