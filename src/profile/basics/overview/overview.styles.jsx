import styled from 'react-emotion';
import { Colors, Fonts } from '../../../themes/themes.js';

export const OverviewTable = styled('div')`
  background-image: ${Colors.gradient.pink};
  padding: 15px 20px;
  color: ${Colors.white};
  border-radius: 0.4em;
  box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  margin-bottom: 1em;
`;

export const Row = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Cell = styled('div')`
  padding: 5px 10px;
  text-align: left;
  flex: 1;
`;

export const Title = styled('div')`
  margin-top: 0.2em;
  font-weight: ${Fonts.bold};
  font-size: 0.6em;
  font-family: ${Fonts.titleFamily};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Subtitle = styled('div')`
  text-transform: capitalize;
  font-family: ${Fonts.bodyFamily};
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 2px;
`;
