import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { StyledTouchDeck, StyledWrapper } from '../assets/styles/single-deck-styles';
import { StyledView, ButtonText } from '../assets/styles/common';
import { setDeckColors } from '../utils/styles';

class SingleDeck extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Deck', { deckName: this.props.title });
  }
	
  render() {
    return (
      <StyledWrapper>
        <StyledTouchDeck theme={{ cardColor: setDeckColors(this.props.deckLength) }} key={this.props.title} onPress={this.handlePress}>
          <ButtonText>{this.props.title}</ButtonText>
          <ButtonText>{ `${this.props.cardLength} ${this.props.cardLength === 1 ? 'card' : 'cards'}` }</ButtonText>
        </StyledTouchDeck>
      </StyledWrapper>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    deckLength: Object.keys(decks).length
  }
}

export default connect(mapStateToProps)(SingleDeck);
