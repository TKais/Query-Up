import React from 'react';
import { Text } from 'react-native';
import { StyledView } from '../assets/styles/common';

function Score(props) {
  return (
    <StyledView>
      <Text>{props.numberCorrect}</Text>
      <Text>{props.numberIncorrect}</Text>
    </StyledView>
  );
}

export default Score;