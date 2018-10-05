import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Header from './components/Header';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import { StyledView } from './assets/styles/app-styles';

const Tabs = createBottomTabNavigator(
  {
    Decks: DeckList,
    ['New Deck']: NewDeck,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let routeIcon;

        if( routeName === 'Decks' ) {
          routeIcon = <Ionicons name="ios-albums" size={30} color={tintColor} />;
        } else if ( routeName === 'New Deck' ) {
          routeIcon = <FontAwesome name="plus-square" size={30} color={tintColor} />;
        }
        return routeIcon;
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
  },
}, {
  headerMode: 'none'
});

class App extends React.Component {
  state = {
    headerName: ''
  }

  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <StyledView>
          <Header headerText="Decks" />
          <MainNavigator />
        </StyledView>
      </Provider>
    );
  }
}

export default App;