import React from 'react';
import { Text } from 'react-native';
import { StyledView } from '../assets/styles/common';
import { connect } from 'react-redux';

class Quiz extends React.Component {
  generateQuiz = () => {
    const decks = this.props.decks;
    const deckName = this.props.navigation.state.params.deckName;
    
    return decks[deckName].cards.length > 0 ? this.showCards(decks[deckName].cards) : this.showError(deckName);
  }

  showCards = (cards) => {
    console.log(cards);
  }

  showError = (deckName) => {
    return `Sorry, you cannot take a quiz because there are no cards in deck ${deckName}`;
  }

  render() {
    return (
      <StyledView>
        <Text>{this.generateQuiz()}</Text>
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
