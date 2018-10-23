import styled from 'styled-components';

export const StyledWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTouchDeck = styled.TouchableOpacity`
  background-color: ${props => props.theme.cardColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1;
  border-color: ${props => props.theme.cardColor};
  border-radius: 7;
  shadow-color: #717171;
  shadow-opacity: .25;
  shadow-radius: 10;
  margin-top: -3;
  padding-bottom: 35;
  padding-top: 35;
  width: 75%;
`