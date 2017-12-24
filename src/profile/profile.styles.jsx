import styled, { css } from 'react-emotion';
import { Colors, Fonts } from '../themes/themes.js'; 

export const ProfileContainer = styled('div')`
  max-width: 100%;
`;

export const TabContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0.4em;
  height: 3em;
  width: 100%;
  box-shadow: 0px 3px 5px 2px ${Colors.shadow};
  border-radius: 0.4em;
`;

export const TabHeader = styled('div')`
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
  color: ${Colors.pink};
  border-bottom-color: ${Colors.pink};
`;
