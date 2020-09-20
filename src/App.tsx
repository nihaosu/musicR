import React from 'react';
import RouteView from '@/router';
import Store from '@/store';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Store>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true}></StatusBar>
      <RouteView />
    </Store>
  );
};

export default App;
