import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { createCard } from '../actions/decks';
import { StyledView, StyledButton, ButtonText, StyledInput } from '../assets/styles/common';

class AddCard extends React.Component {
  state = {
    cardQuestion: '',
    cardAnswer: '',
  }

  handleAddCard = () => {
    const deckName = this.props.navigation.state.params.deckName;
    this.props.dispatch(createCard(deckName, { Question: this.state.cardQuestion, Answer: this.state.cardAnswer}));
    this.setState({
      cardQuestion: '',
      cardAnswer: '',
    });
    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <StyledView>
        <Text>Add Card</Text>
        <StyledInput placeholder="Question" value={this.state.cardQuestion} />
        <StyledInput placeholder="Answer" value={this.state.cardAnswer} />
        <StyledButton onPress={this.handleAddCard}>
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