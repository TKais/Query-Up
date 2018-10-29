import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { createCard } from '../actions/decks';
import { addAsyncCard } from '../utils/storage';
import { Ionicons } from '@expo/vector-icons';
import { colorPalette, additionalColors } from '../utils/styles';
import { StyledView, StyledButton, ButtonText, StyledInput, StyledHeader, SpaceView } from '../assets/styles/common';

class AddCard extends React.Component {
  state = {
    cardQuestion: '',
    cardAnswer: '',
  }

  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;

    return {
      title: deckName,
      headerLeft: <Ionicons name={ Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back' } size={30} style={{ marginTop: -5, marginLeft: 10 }} onPress={() => navigation.navigate('Decks')} title="Decks" color="#FFFFFF" />,
    }
  };

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
        <SpaceView>
          <StyledHeader theme={{headerColor: additionalColors.headers, marginBottom: 25}}>Add Card</StyledHeader>
          <StyledInput underlineColorAndroid="transparent" placeholder="Question" value={this.state.cardQuestion} onChangeText={ this.handleQuestionChange } />
          <StyledInput underlineColorAndroid="transparent" placeholder="Answer" value={this.state.cardAnswer} onChangeText={ this.handleAnswerChange } />
          <StyledButton onPress={this.handleAddCard} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach }}>
            <ButtonText>Submit</ButtonText>
          </StyledButton>
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

export default connect(mapStateToProps)(AddCard);