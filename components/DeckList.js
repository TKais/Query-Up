import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StyledView } from '../assets/styles/decklist-styles';
import Deck from './Deck';

class DeckList extends React.Component {

	generateDeckList = () => {
		this.props.decks.map( ( deck ) => (
			<Deck name={deck.name} />
		));
	}

	generateErrorMessage = () => {
		return (
			<Text>
			    You haven't created any decks yet.
			</Text>
		)
	}

	render() {
		return (
			<StyledView>
			    <Text>DeckList View</Text>
			    { this.props.decks.length > 0 ? this.generateDeckList() : this.generateErrorMessage() }
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