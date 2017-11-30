import styled from 'react-emotion';
import { Colors, Fonts } from '../../themes/themes.js';

export const OverviewContainer = styled('div')`
  background-color: ${Colors.pink};
  padding: 15px 20px;
  color: white;
  border-radius: 0.4em;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-evenly;
`;

export const Cell = styled('div')`
  padding: 5px 10px;
  text-align: center;
  flex: 1;
`;

export const Title = styled('div')`
  font-weight: ${Fonts.bold};
  font-size: 1.2em;
  font-family: ${Fonts.titleFamily};
`;

export const Subtitle = styled('div')`
  text-transform: capitalize;
  font-family: ${Fonts.bodyFamily};
`;

export const Subtype = styled('div')`
  text-transform: capitalize;
  font-family: ${Fonts.bodyFamily};
  display: inline;

  &:not(:first-child) {
    &:before {
      content: " / "
    }
  }
`;

export const Subnumber = styled('div')`
  font-family: ${Fonts.bodyFamily};
`;
