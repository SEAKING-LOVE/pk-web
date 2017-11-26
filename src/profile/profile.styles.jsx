import styled, { css } from 'react-emotion';

export const TabContainer = styled('div')`
  display: flex;
  margin-bottom: 10px;
`;

export const TabHeader = styled('div')`
  border-radius: 0.4em;
  background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  text-align: center;
  justify-content: space-between;
  flex: 1;
  padding: 20px 30px;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
  color: white;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const activeTab = css`
  background-image: linear-gradient(-45deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);
`;
