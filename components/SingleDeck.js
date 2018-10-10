import React from 'react';
import { Text } from 'react-native';
import { StyledTouchDeck, StyledWrapper } from '../assets/styles/single-deck-styles';

class SingleDeck extends React.Component {
  handlePress = () => {
    // comment
  }
	
  render() {
    return (
      <StyledWrapper>
        <StyledTouchDeck key={this.props.title}>
          <Text>{this.props.title}</Text>
        </StyledTouchDeck>
      </StyledWrapper>
    );
  }
}

export default SingleDeck;
