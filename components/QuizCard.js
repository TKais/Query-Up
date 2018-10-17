import React from 'react';
import { Text } from 'react-native';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';

function QuizCard(props) {
  return (
    <StyledView>
      <Text>{props.question}</Text>
      <StyledButton>
        <ButtonText>Answer</ButtonText>
      </StyledButton>
      <StyledButton onPress={props.onCorrectAnswer}>
        <ButtonText>Correct</ButtonText>
      </StyledButton>
      <StyledButton onPress={props.onIncorrectAnswer}>
        <ButtonText>Incorrect</ButtonText>
      </StyledButton>
    </StyledView>
  );
}

export default QuizCard;