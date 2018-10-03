import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import styled from 'styled-components';
import DeckList from './components/DeckList';

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
          <StatusView>
            <StatusBar translucent barStyle='light-content'/>
          </StatusView>
        <DeckList />
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  backgroundColor: #FFF;
  flex: 1;
`

const StatusView = styled.View`
  backgroundColor: blue;
  height: ${ props => props.statusBar.statusBarHeight }
`

StatusView.defaultProps = {
  statusBar: {
    statusBarHeight: Constants.statusBarHeight
  }
}