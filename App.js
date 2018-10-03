import React from 'react';
import { Text, View, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import { StyledView, StatusView, StatusText } from './assets/styles/App';

const Tabs = createBottomTabNavigator(
  {
    Decks: DeckList,
    New: NewDeck,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return routeName === 'Decks' ? (
          <Ionicons name="ios-albums" size={30} color="white" />
        ) : (
          <FontAwesome name="plus-square" size={30} color="white" />
        );
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'white',
      style: {
        height: 60,
        backgroundColor: '#71C9C8',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
});

class App extends React.Component {
  render() {
    return (
      <StyledView>
          <StatusView>
            <StatusBar barStyle="light-content"/>
            <StatusText>Decks</StatusText>
          </StatusView>
        <MainNavigator />
      </StyledView>
    );
  }
}

export default App;