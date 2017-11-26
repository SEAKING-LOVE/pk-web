import styled from 'react-emotion';

export const OverviewContainer = styled('div')`
  background-image: linear-gradient(-135deg, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
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
