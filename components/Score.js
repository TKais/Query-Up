import React from 'react';
import { Text } from 'react-native';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';

class Score extends React.Component {
  startQuiz = () => {
    this.props.onResetQuiz();
  }

  routeToDeck = () => {
    this.props.navigation.navigate('Deck');
  }

  render() {
    return (
      <StyledView>
        <Text>Correct: {this.props.numberCorrect}</Text>
        <Text>Incorrect: {this.props.numberIncorrect}</Text>
        <StyledButton onPress={this.startQuiz}>
          <ButtonText>Start Over</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.routeToDeck}>
          <ButtonText>Back to Deck</ButtonText>
        </StyledButton>
      </StyledView>
    );
  }
}

export default Score;