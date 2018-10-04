import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StatusView, StatusText } from '../assets/styles/header-styles';

function Header( props ) {
	return (
		<StatusView>
          <StatusBar barStyle="light-content"/>
          <StatusText>{ props.headerText }</StatusText>
        </StatusView>
	);
}

export default Header;