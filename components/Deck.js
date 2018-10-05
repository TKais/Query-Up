import React from 'react';
import { View, Text, Button } from 'react-native';

class Deck extends React.Component {
	handlePress = () => {
		// ok
	}
	
	render() {
		return (
			<Button title={this.props.title} onPress={ this.handlePress } />
		);
	}
}

export default Deck;