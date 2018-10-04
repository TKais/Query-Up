import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StyledView } from '../assets/styles/decklist-styles';
import Deck from './Deck';

class DeckList extends React.Component {
	render() {
		return (
			<StyledView>
			    <Text>DeckList View</Text>
			    <Deck />
			</StyledView>
		);
	}
}

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(DeckList);