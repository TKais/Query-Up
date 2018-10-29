import React from 'react';
import { Text } from 'react-native';
import { StyledView, StyledButton, ButtonText, StyledHeader } from '../assets/styles/common';
import { colorPalette } from '../utils/styles';

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
        <StyledHeader>Correct: {this.props.numberCorrect}</StyledHeader>
        <StyledButton onPress={this.startQuiz} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach }}>
          <ButtonText>Restart Quiz</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.routeToDeck} activeOpacity={0.8} theme={{ buttonColor: colorPalette.coral }}>
          <ButtonText>Back to Deck</ButtonText>
        </StyledButton>
      </StyledView>
    );
  }
}

export default Score;