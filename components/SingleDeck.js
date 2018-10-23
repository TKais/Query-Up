import React from 'react';
import { Text } from 'react-native';
import { StyledTouchDeck, StyledWrapper } from '../assets/styles/single-deck-styles';
import { StyledView, ButtonText } from '../assets/styles/common';
import { setCardColors } from '../utils/styles';

class SingleDeck extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Deck', { deckName: this.props.title });
  }
	
  render() {
    return (
      <StyledWrapper>
        <StyledTouchDeck theme={{ cardColor: setCardColors() }} key={this.props.title} onPress={this.handlePress}>
          <ButtonText>{this.props.title}</ButtonText>
          <ButtonText>{ `${this.props.cardLength} ${this.props.cardLength === 1 ? 'card' : 'cards'}` }</ButtonText>
        </StyledTouchDeck>
      </StyledWrapper>
    );
  }
}

export default SingleDeck;
