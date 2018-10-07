import React from 'react';
import { View, Text, Keyboard, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyledView, StyledInput, StyledButton, ButtonText } from '../assets/styles/new-deck';
import { createDeck } from '../actions/decks';
import { NavigationActions } from 'react-navigation';
import { DECK_KEY } from '../utils/storage';

class NewDeck extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	textValue: ''
	    };
	}

	handleChange = ( val ) => {
		this.setState({
			textValue: val
		});
	}

	handlePress = () => {
		const decks = this.props.decks;
		const value = this.state.textValue;

		if ( value.length > 0 ) {
			this.props.dispatch( createDeck(value) );
			AsyncStorage.setItem( DECK_KEY, JSON.stringify({ [value]: { title: value, questions: [], } }))
			    .then( Keyboard.dismiss() )
			    .then( this.setState({ textValue: '' }) );
	    } else if ( Object.keys(decks).length > 0 && !Object.keys(decks).includes(value) ) {
		    return new Error( 'This deck title already exists. Please choose a new deck title.' ) ;
		}
		this.props.navigation.navigate( 'Decks' );
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