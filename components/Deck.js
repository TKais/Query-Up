import React from 'react';
import { View, Text, Button } from 'react-native';

class Deck extends React.Component {
	render() {
		return (
			<Button title={this.props.name} />
		);
	}
}

export default Deck;