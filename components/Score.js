import React from 'react';
import { StyledView, StyledButton, ButtonText, StyledHeader, SpaceView } from '../assets/styles/common';
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
        <SpaceView>
          <StyledHeader>Your score is {Math.floor((this.props.numberCorrect / this.props.numOfCards) * 100)}%</StyledHeader>
          <StyledButton onPress={this.startQuiz} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach, marginTop: 80 }}>
            <ButtonText>Restart Quiz</ButtonText>
          </StyledButton>
          <StyledButton onPress={this.routeToDeck} activeOpacity={0.8} theme={{ buttonColor: colorPalette.coral }}>
            <ButtonText>Back to Deck</ButtonText>
          </StyledButton>
        </SpaceView>
      </StyledView>
    );
  }
}

export default Score;