import React from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyledView } from '../assets/styles/decklist-styles';
import SingleDeck from './SingleDeck';
import { DECK_KEY } from '../utils/storage';

class DeckList extends React.Component {

	generateDeckList = () => {
		const deckNames = Object.keys( this.props.decks );
		const deckArray = Object.values(this.props.decks);

		return (
			<FlatList
				data={ deckArray }
				renderItem={ ({ item, index }) => <SingleDeck title={item.title} cardLength={item.cards.length} navigation={this.props.navigation} /> }
				showsVerticalScrollIndicator={false}
				keyExtractor={ item => item.title }
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