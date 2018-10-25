import React from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { StyledHeader } from '../assets/styles/deck-styles';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';
import { deleteDeck } from '../actions/decks';
import { removeAsyncDeck } from '../utils/storage';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;

    return {
      title: deckName,
      headerLeft: <Ionicons name={ Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back' } size={30} style={{ marginTop: -5, marginLeft: 10 }} onPress={() => navigation.navigate('Decks')} title="Decks" color="#FFFFFF" />,
    }
  };

  generateCardLengthText = () => {
    const deckName = this.props.decks[this.props.navigation.state.params.deckName];
    const length = deckName && deckName.cards.length;
    return `${length} ${length === 1 ? 'card' : 'cards'}` || null;
  }

  handleAddCardPress = () => {
    this.props.navigation.navigate('Add Card', {deckName: this.props.navigation.state.params.deckName});
  }

  handleStartQuizPress = () => {
    this.props.navigation.navigate('Start Quiz', {deckName: this.props.navigation.state.params.deckName});
  }

  handleDeleteDeckPress = () => {
    const deckName = this.props.navigation.state.params.deckName;

    removeAsyncDeck(deckName)
      .then(this.props.dispatch(deleteDeck(deckName)))
      .then(this.props.navigation.navigate('Decks'));
  }

  render() {
    return (
      <StyledView>
        <StyledHeader>{this.props.navigation.state.params.deckName}</StyledHeader>
        <Text>{ this.generateCardLengthText() }</Text>
        <StyledButton onPress={this.handleAddCardPress} theme={{ buttonColor: '#71C9C8' }}>
          <ButtonText>Add Card</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.handleStartQuizPress} theme={{ buttonColor: '#FED0B7' }}>
          <ButtonText>Start Quiz</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.handleDeleteDeckPress} theme={{ buttonColor: '#FDB2B3' }}>
          <ButtonText>Delete Deck</ButtonText>
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

export default connect(mapStateToProps)(Deck);