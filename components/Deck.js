import React from 'react';
import { View, Text, Button } from 'react-native';

class Deck extends React.Component {
	handlePress = () => {
		// comment
	}
	
	render() {
		return (
			<View key={this.props.title}>
	            <Text>{this.props.title}</Text>
	        </View>
		);
	}
}

export default Deck;