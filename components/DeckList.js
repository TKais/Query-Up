import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions/decks';
import { StyledView, SpaceView, StyledHeader } from '../assets/styles/common';
import SingleDeck from './SingleDeck';
import { getAsyncDecks } from '../utils/storage';

class DeckList extends React.Component {
	componentDidMount() {
		getAsyncDecks()
		  .then((result) => JSON.parse(result))
		  .then((result) => this.props.dispatch(getDecks(result)))
		  .then(() => this.setState({ loading: false }));
	}

	generateDeckList = () => {
		const deckArray = Object.values(this.props.decks);

		return (
			<FlatList
				data={ deckArray }
				renderItem={ ({ item, index }) => <SingleDeck title={item.title} cardLength={item.cards.length} navigation={this.props.navigation} deckIndex={index} topMargin={index === 0 ? '25' : null} /> }
				showsVerticalScrollIndicator={false}
				keyExtractor={ item => item.title }
			/>
		);
	}

	generateErrorMessage = () => {
		return (
			<StyledHeader>
			    You haven't created any decks yet. Select the New Deck tab below to get started
			</StyledHeader>
		)
	}

	render() {
		return (
			<StyledView>
			  <SpaceView>
			    { Object.keys(this.props.decks).length > 0 ? this.generateDeckList() : this.generateErrorMessage() }
		    </SpaceView>
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