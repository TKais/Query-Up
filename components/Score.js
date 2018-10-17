import React from 'react';
import { Text } from 'react-native';
import { StyledView } from '../assets/styles/common';

function Score(props) {
  return (
    <StyledView>
      <Text>Correct: {props.numberCorrect}</Text>
      <Text>Incorrect: {props.numberIncorrect}</Text>
    </StyledView>
  );
}

export default Score;