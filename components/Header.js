import React from 'react';
import { StatusBar } from 'react-native';
import { StatusView } from '../assets/styles/header-styles';

function Header( props ) {
	return (
		<StatusView>
      <StatusBar />
    </StatusView>
	);
}

export default Header;