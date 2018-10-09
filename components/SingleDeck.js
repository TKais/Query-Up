import React from 'react';
import { View, Text } from 'react-native';
import { StyledTouchDeck } from '../assets/styles/single-deck-styles';

class SingleDeck extends React.Component {
	handlePress = () => {
		// comment
	}
	
	render() {
		return (
			<StyledTouchDeck key={this.props.title}>
	            <Text>{this.props.title}</Text>
	        </StyledTouchDeck>
		);
	}
}

export default SingleDeck;