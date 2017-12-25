import styled, { css } from 'react-emotion';
import { Colors, Fonts, Styles } from '../../themes/themes.js';

export const EvolutionContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0.4em;
  width: 100%;
  box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  border-radius: 0.4em;
  font-family: ${Fonts.titleFamily};
  overflow-x: auto;
`;

export const ColumnRow = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &.threeStages {
    min-width: 520px;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
// background: ${Colors.lightBlue};
// color: ${Colors.white};
export const Column = styled('div')`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.containsPkmn {


	text-transform: capitalize;
	border-radius: 0.4em;
	margin: 0.2em;
	width: 100%;
  }

  &.hasStage2-before {
  	width: 50%;
  }

  &.hasStage2-after {
  	width: 66.6667%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 6em;
  min-height: 6em;
  overflow: hidden;
  box-sizing: border-box;
  background-image: ${Colors.gradient.cool};
  border: solid 0.2em ${Colors.lightBlue};
  border-radius: 0.5em;
  ${Styles.spritePosition}
  &>div {
    margin-top: 0.7em;
  }
`;
export const verticalCenter = css`
  justify-content: center;
`;

export const StageName = styled('div')`
  color: ${Colors.white};
  letter-spacing: 1px;
`;

export const Conditions = styled('div')`
  width: 100%;
  padding: 0.8em;
  background-color: ${Colors.white};
  border-top: solid 0.2em ${Colors.lightBlue};
  color: ${Colors.darkGrey};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    padding: 0.2em 0;
  }
`;

export const sprite = Styles.sprite;

export const spriteScale = css`
  transform: scale(1.5);
`;
