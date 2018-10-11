import React from 'react';
import { View, Text } from 'react-native';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;
    return {
      title: deckName
    }
  };

  render() {
    return (
      <View>
        <Text>Deck</Text>
      </View>
    );
  }
}

export default Deck;