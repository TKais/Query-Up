import React from 'react';
import { Text } from 'react-native';
import { StyledView } from '../assets/styles/common';
import { connect } from 'react-redux';
import QuizCard from './QuizCard';

class Quiz extends React.Component {
  state = {
    cardIndex: 0,
    correct: 0,
    incorrect: 0
  }

  generateQuiz = () => {
    const decks = this.props.decks;
    const deckName = this.props.navigation.state.params.deckName;
    
    return decks[deckName].cards.length > 0 ? this.createCard(decks[deckName].cards) : this.showError(deckName);
  }

  createCard = (cards) => {
    const cardIndex = this.state.cardIndex;

    if(cardIndex <= cards.length - 1) {
      return (
        <QuizCard question={cards[cardIndex].Question} answer={cards[cardIndex].Answer} />
      );
    }
  }

  handlePress = (event) => {
    console.log('EVENT---->', event);
  }

  showError = (deckName) => {
    return (
      <Text>
        { `Sorry, you cannot take a quiz because there are no cards in deck ${deckName}` }
      </Text>
    );
  }

  render() {
    return (
      <StyledView>
        {this.generateQuiz()}
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
