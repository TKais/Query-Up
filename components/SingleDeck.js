import React from 'react';
import { Text } from 'react-native';
import { StyledTouchDeck, StyledWrapper } from '../assets/styles/single-deck-styles';

class SingleDeck extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Deck', { deckName: this.props.title });
  }
	
  render() {
    return (
      <StyledWrapper>
        <StyledTouchDeck key={this.props.title} onPress={this.handlePress}>
          <Text>{this.props.title}</Text>
          <Text>{ `${this.props.cardLength} cards` }</Text>
        </StyledTouchDeck>
      </StyledWrapper>
    );
  }
}

export default SingleDeck;
