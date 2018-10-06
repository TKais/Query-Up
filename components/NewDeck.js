import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { StyledView, StyledInput, StyledButton, ButtonText } from '../assets/styles/new-deck';
import { createDeck } from '../actions/decks';
import { NavigationActions } from 'react-navigation';

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
		this.props.dispatch( createDeck(this.state.textValue) );
		Keyboard.dismiss();
		this.setState({
			textValue: ''
		});
		// this.props.navigation.dispatch(NavigationActions.back({key: 'DeckList'}));
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

export default connect()(NewDeck);