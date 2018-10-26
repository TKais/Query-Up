import styled from 'styled-components';
import { additionalColors } from '../../utils/styles';

export const StyledNumberText = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  color: ${additionalColors.headers}
`

export const StyledScoreButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50;
`

export const StyledScoreButtons = styled.TouchableOpacity`
  border-color: ${props => props.theme.buttonColor};
  background-color: ${props => props.theme.buttonColor};
  border-width: 0;
  padding-top: -10;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  width: auto;
  height: auto;
  align-self: center;
  margin-top: 10;
  border-radius: 10;
  margin-right: 20;
  margin-left: 20;
`

