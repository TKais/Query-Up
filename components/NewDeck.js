import React from 'react';
import { Keyboard, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyledView, StyledButton, ButtonText, StyledInput, SpaceView, StyledHeader } from '../assets/styles/common';
import { createDeck } from '../actions/decks';
import { NavigationActions } from 'react-navigation';
import { addAsyncDeck } from '../utils/storage';
import { colorPalette, additionalColors } from '../utils/styles';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

class NewDeck extends React.Component {
	state = {
		textValue: ''
	}

	handleChange = (val) => {
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

		if (value.length > 0) {
			addAsyncDeck(deckData)
			    .then(this.props.dispatch(createDeck(value)))
			    .then(Keyboard.dismiss())
			    .then(this.setState({ textValue: '' }))
			    .then(clearLocalNotification())
          .then(setLocalNotification());
	    } else if (Object.keys(decks).length > 0 && !Object.keys(decks).includes(value)) {
		    return new Error( 'This deck title already exists. Please choose a new deck title.' ) ;
		}
		this.props.navigation.navigate('Deck', { deckName: value });
	}

	render() {
		return (
			<StyledView>
			  <SpaceView>
			    <StyledHeader theme={{headerColor: additionalColors.headers, marginBottom: 25}}>What is the title of your new deck?</StyledHeader>
			    <StyledInput underlineColorAndroid="transparent" value={ this.state.textValue } onChangeText={ this.handleChange } />
			    <StyledButton onPress={this.handlePress} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach }}>
			      <ButtonText>Create Deck</ButtonText>
			    </StyledButton>
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

export default connect(mapStateToProps)(NewDeck);