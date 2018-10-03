import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import { StyledView, StatusView, StatusText } from './assets/styles/App';

class App extends React.Component {
  render() {
    return (
      <StyledView>
          <StatusView>
            <StatusBar barStyle="light-content"/>
            <StatusText>Decks</StatusText>
          </StatusView>
        <DeckList />
      </StyledView>
    );
  }
}

export default App;