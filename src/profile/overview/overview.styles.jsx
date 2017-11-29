import styled from 'react-emotion';
import { Colors } from '../../themes/themes.js';

export const OverviewContainer = styled('div')`
  background-image: ${Colors.gradient.pink};
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
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'Dosis', sans-serif;
`;

export const Subtitle = styled('div')`
  text-transform: capitalize;
  font-family: 'Concert One', cursive;
`;

export const Subtype = styled('div')`
  text-transform: capitalize;
  font-family: 'Concert One', cursive;
  display: inline;

  &:not(:first-child) {
    &:before {
      content: " / "
    }
  }
`;

export const Subnumber = styled('div')`
  font-family: 'Concert One', cursive;
`;
