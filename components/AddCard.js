import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { createCard } from '../actions/decks';
import { addAsyncCard } from '../utils/storage';
import { StyledView, StyledButton, ButtonText, StyledInput } from '../assets/styles/common';

class AddCard extends React.Component {
  state = {
    cardQuestion: '',
    cardAnswer: '',
  }

  handleQuestionChange = (value) => {
    this.setState({
      cardQuestion: value
    });
  }

  handleAnswerChange = (value) => {
    this.setState({
      cardAnswer: value
    });
  }

  handleAddCard = () => {
    const deckName = this.props.navigation.state.params.deckName;
    const card = { Question: this.state.cardQuestion, Answer: this.state.cardAnswer};
    return addAsyncCard(deckName, card)
      .then(this.props.dispatch(createCard(deckName, card)))
      .then(this.setState({ cardQuestion: '', cardAnswer: '' }))
      .then(this.props.navigation.navigate('Decks'));
  }

  render() {
    return (
      <StyledView>
        <Text>Add Card</Text>
        <StyledInput underlineColorAndroid="transparent" placeholder="Question" value={this.state.cardQuestion} onChangeText={ this.handleQuestionChange } />
        <StyledInput underlineColorAndroid="transparent" placeholder="Answer" value={this.state.cardAnswer} onChangeText={ this.handleAnswerChange } />
        <StyledButton onPress={this.handleAddCard} activeOpacity={0.8}>
          <ButtonText>Submit</ButtonText>
        </StyledButton>
      </StyledView>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddCard);