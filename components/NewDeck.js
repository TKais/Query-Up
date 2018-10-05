import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StyledView, StyledInput, StyledButton, ButtonText } from '../assets/styles/new-deck';
import { createDeck } from '../actions/decks';

class NewDeck extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	textValue: ''
    };
  }

	handleChange = ( value ) => {
		console.log(value)
		this.setState({
			textValue: value
		});
	}

	handlePress = () => {
		this.props.dispatch( createDeck(this.state.textValue) );
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