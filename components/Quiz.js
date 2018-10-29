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

  handleAnswer = (isCorrect) => {
    const newCardIndex = this.state.cardIndex += 1;
    if(isCorrect) {
      this.setState({
        cardIndex: newCardIndex,
        correct: this.state.correct += 1,
      });
    } else {
      this.setState({
        cardIndex: newCardIndex,
      });
    }
  }

  createCard = (cards) => {
    const cardIndex = this.state.cardIndex;

    if (cardIndex <= cards.length - 1) {
      return (
        <QuizCard cards={cards} cardIndex={cardIndex + 1} question={cards[cardIndex].Question} answer={cards[cardIndex].Answer} onHandleAnswer={this.handleAnswer} />
      );
    } else {
      return (
        <Score numberCorrect={this.state.correct} numOfCards={cards.length} navigation={this.props.navigation} onResetQuiz={this.resetQuiz} />
      );
    }
  }

  resetQuiz = () => {
    this.setState({ 
      cardIndex: 0,
      correct: 0,
    });
  }

  showError = (deckName) => {
    return (
      <SpaceView>
        <StyledMessageWrapper>
          <StyledHeader>
            { `Sorry, you cannot take a quiz because there are no cards in deck ${deckName}.` }
          </StyledHeader>
        </StyledMessageWrapper>
      </SpaceView>
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
