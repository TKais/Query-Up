import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Header from './components/Header';
import { StyledView } from './assets/styles/app-styles';

const Tabs = createBottomTabNavigator(
  {
    Decks: DeckList,
    New: NewDeck,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        return routeName === 'Decks' ? (
          <Ionicons name="ios-albums" size={30} color={tintColor} />
        ) : (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        );
      },
    }),
    tabBarOptions: {
      initialRouteName: DeckList,
      showIcon: true,
      inactiveTintColor: '#FFFFFF',
      activeTintColor: '#FAEBD7',
      style: {
        height: 70,
        backgroundColor: '#71C9C8',
      },
      labelStyle: {
        paddingBottom: 10,
      }
    },
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  }
}, {
  headerMode: 'none'
});

class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Header headerText="Decks" />
        <MainNavigator />
      </StyledView>
    );
  }
}

export default App;