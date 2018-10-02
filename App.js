import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import DeckList from './components/DeckList';

export default class App extends React.Component {
  generateStatusBar() {
    return (
      <StatusBar barStyle = "dark-content" hidden = {false}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.generateStatusBar() }
        <Text>This is working!</Text>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
