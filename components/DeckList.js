import React from 'react';
import { View, Text } from 'react-native';
import { StyledView } from '../assets/styles/decklist-styles';
import Deck from './Deck';

class DeckList extends React.Component {
	render() {
		return (
			<StyledView>
			    <Text>DeckList View</Text>
			</StyledView>
		);
	}
}

export default DeckList;