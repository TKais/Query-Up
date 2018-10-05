import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { StyledView } from '../assets/styles/decklist-styles';
import Deck from './Deck';

class DeckList extends React.Component {

	generateDeckList = () => {
		const deckNames = Object.keys( this.props.decks );

		return (
			<FlatList
				data={ [ this.props.decks ] }
				renderItem={ ({ item, index }) => <Deck key={item[deckNames[index]].title} title={item[deckNames[index]].title} /> }
			/>
		);
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
			    { Object.keys(this.props.decks).length > 0 ? this.generateDeckList() : this.generateErrorMessage() }
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