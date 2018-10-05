import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class NewDeck extends React.Component {
	render() {
		return (
			<View>
			    <Text>NewDeck View</Text>
			    <Text>What is the title of your new deck?</Text>
			</View>
		);
	}
}

export default connect()(NewDeck);