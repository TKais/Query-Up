import React from 'react';
import { Text } from 'react-native';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';

class QuizCard extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>{this.props.question}</Text>
        <StyledButton>
          <ButtonText>Answer</ButtonText>
        </StyledButton>
        <StyledButton>
          <ButtonText>Correct</ButtonText>
        </StyledButton>
        <StyledButton>
          <ButtonText>Incorrect</ButtonText>
        </StyledButton>
      </StyledView>
    );
  }
}

export default QuizCard;