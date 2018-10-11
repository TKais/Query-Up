import React from 'react';
import { View, Text } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deckName = navigation.state.params.deckName;

    return {
      title: deckName,
      headerLeft: (<HeaderBackButton onPress={()=>{navigation.navigate('Decks')}}/>),
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