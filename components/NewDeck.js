import React from 'react';
import { View, Text, Keyboard, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyledView, StyledButton, ButtonText, StyledInput } from '../assets/styles/common';
import { createDeck } from '../actions/decks';
import { NavigationActions } from 'react-navigation';
import { addAsyncDeck } from '../utils/storage';

class NewDeck extends React.Component {
	state = {
		textValue: ''
	}

	handleChange = ( val ) => {
		this.setState({
			textValue: val
		});
	}

	handlePress = () => {
		const decks = this.props.decks;
		const value = this.state.textValue;
		const deckData = { 
			[value]: { 
				title: value,
				cards: [], 
			} 
		};

		if ( value.length > 0 ) {
			addAsyncDeck( deckData )
			    .then( this.props.dispatch(createDeck(value)) )
			    .then( Keyboard.dismiss() )
			    .then( this.setState({ textValue: '' }) );
	    } else if ( Object.keys(decks).length > 0 && !Object.keys(decks).includes(value) ) {
		    return new Error( 'This deck title already exists. Please choose a new deck title.' ) ;
		}
		this.props.navigation.navigate( 'Deck', { deckName: value } );
	}

	render() {
		return (
			<StyledView>
			    <Text>What is the title of your new deck?</Text>
			    <StyledInput value={ this.state.textValue } onChangeText={ this.handleChange } />
			    <StyledButton onPress={this.handlePress}>
			      <ButtonText>Create Deck</ButtonText>
			    </StyledButton>
			</StyledView>
		);
	}
}

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(NewDeck);