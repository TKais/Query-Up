import styled from 'styled-components';
import { additionalColors } from '../../utils/styles';

export const StyledView = styled.View`
  background-color: #AAE0DC;
  flex: 1;
`

export const StyledHeader = styled.Text`
  font-size: 24;
  align-self: center;
  margin-bottom: ${props => props.theme.marginBottom || 0};
  margin-top: ${props => props.theme.marginTop || 0};
  color: ${props => additionalColors.headers};
`

export const StyledButton = styled.TouchableOpacity`
  border-color: ${props => props.theme.buttonColor};
  background-color: ${props => props.theme.buttonColor};
  margin-top: ${props => props.theme.marginTop || 10};
  border-width: 1;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  width: 50%;
  align-self: center;
  border-radius: 5;
`

export const StyledMessageWrapper = styled.View`
  margin-left: 15;
  margin-right: 15;
`

export const ButtonText = styled.Text`
  text-align: center;
  color: #FFFFFF;
`

export const StyledInput = styled.TextInput`
  height: 40; 
  border-color: #FFFFFF;
  border-width: 1;
  width: 75%;
  align-self: center;
  background-color: #FFFFFF;
  margin-bottom: 15;
`

export const SpaceView = styled.View`
  margin-top: 40;
`

export const StyledSubHeader = styled.Text`
  font-size: 16;
  align-self: center;
  color: ${props => additionalColors.headers};
`