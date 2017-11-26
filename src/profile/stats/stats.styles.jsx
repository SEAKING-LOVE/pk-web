import styled from 'react-emotion';

export const StatsContainer = styled('div')`
  background-image: linear-gradient(-225deg, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
  padding: 15px 20px;
  color: white;
  border-radius: 0.4em;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > div {
    padding: 5px 10px;
  }
`;

export const Divider = styled('hr')`
  border-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`;

export const ProgressName = styled('div')`
  flex: 1;
  text-align: right;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
`;

export const ProgressBar = styled('div')`
  font-family: 'Concert One', cursive;
  flex: 11;
`;

export const Background = styled('div')`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 0.2em;
`;

export const Bar = styled('div')`
  background-image: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  padding: 5px 10px;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
`;

export const TotalBar = styled('div')`
  background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
  padding: 5px 10px;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
`;
