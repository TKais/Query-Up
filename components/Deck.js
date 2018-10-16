import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { StyledHeader } from '../assets/styles/deck-styles';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;

    return {
      title: deckName,
      headerLeft: <Ionicons name={ Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back' } size={30} style={{ marginTop: -5, marginLeft: 10 }} onPress={() => navigation.navigate('Decks')} title="Decks" color="#FFFFFF" />,
    }
  };

  handleAddCardPress = () => {
    this.props.navigation.navigate('Add Card');
  }

  handleStartQuizPress = () => {
    this.props.navigation.navigate('Start Quiz');
  }

  render() {
    return (
      <StyledView>
        <StyledHeader>{this.props.navigation.state.params.deckName}</StyledHeader>
        <Text>{ `${this.props.decks[this.props.navigation.state.params.deckName].cards.length} cards` }</Text>
        <StyledButton onPress={this.handleAddCardPress}>
          <ButtonText>Add Card</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.handleStartQuizPress}>
          <ButtonText>Start Quiz</ButtonText>
        </StyledButton>
        <StyledButton>
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