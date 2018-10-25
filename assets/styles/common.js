import styled from 'styled-components';

export const StyledView = styled.View`
  background-color: #AAE0DC;
  flex: 1;
`

export const StyledButton = styled.TouchableOpacity`
  border-color: ${props => props.theme.buttonColor};
  background-color: ${props => props.theme.buttonColor};
  border-width: 1;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  width: 50%;
  align-self: center;
  margin-top: 10;
  border-radius: 5;
`

export const ButtonText = styled.Text`
  text-align: center;
  color: #FFFFFF;
`

export const StyledInput = styled.TextInput`
  height: 40; 
  border-color: #717171;
  border-width: 1;
  width: 75%;
  align-self: center;
  background-color: #FFFFFF;
`