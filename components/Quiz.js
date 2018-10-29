import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { StyledView, StyledHeader, StyledMessageWrapper, SpaceView } from '../assets/styles/common';
import { connect } from 'react-redux';
import QuizCard from './QuizCard';
import Score from './Score';

class Quiz extends React.Component {
  state = {
    cardIndex: 0,
    correct: 0,
    incorrect: 0
  }

  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;

    return {
      title: deckName,
      headerLeft: <Ionicons name={ Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back' } size={30} style={{ marginTop: -5, marginLeft: 10 }} onPress={() => navigation.navigate('Deck')} title={deckName} color="#FFFFFF" />,
    }
  };

  generateQuiz = () => {
    const decks = this.props.decks;
    const deckName = this.props.navigation.state.params.deckName;
    
    return decks[deckName].cards.length > 0 ? this.createCard(decks[deckName].cards) : this.showError(deckName);
  }

  handleCorrectAnswer = () => {
    const correctAnswer = this.state.correct += 1;
    const newCardIndex = this.state.cardIndex += 1;
    this.setState({
      cardIndex: newCardIndex,
      correct: correctAnswer,
    });
  }

  handleIncorrectAnswer = () => {
    const incorrectAnswer = this.state.incorrect += 1;
    const newCardIndex = this.state.cardIndex += 1;
    this.setState({
      cardIndex: newCardIndex,
      incorrect: incorrectAnswer,
    });
  }

  createCard = (cards) => {
    const cardIndex = this.state.cardIndex;

    if (cardIndex <= cards.length - 1) {
      return (
        <QuizCard cards={cards} cardIndex={cardIndex + 1} question={cards[cardIndex].Question} answer={cards[cardIndex].Answer} onCorrectAnswer={this.handleCorrectAnswer} onIncorrectAnswer={this.handleIncorrectAnswer} />
      );
    } else {
      return (
        <Score numberCorrect={this.state.correct} numberIncorrect={this.state.incorrect} navigation={this.props.navigation} onResetQuiz={this.resetQuiz} />
      );
    }
  }

  resetQuiz = () => {
    this.setState({ 
      cardIndex: 0,
      correct: 0,
      incorrect: 0
    });
  }

  showError = (deckName) => {
    return (
      <StyledMessageWrapper>
        <StyledHeader>
          { `Sorry, you cannot take a quiz because there are no cards in deck ${deckName}.` }
        </StyledHeader>
      </StyledMessageWrapper>
    );
  }

  render() {
    return (
      <StyledView>
        <SpaceView>
          {this.generateQuiz()}
        </SpaceView>
      </StyledView>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);
