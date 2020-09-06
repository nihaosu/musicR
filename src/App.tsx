import React from 'react';
import RouteView from '@/router';
import Store from '@/store';

const App = () => {
  return (
    <Store>
      <RouteView />
    </Store>
  );
};

export default App;
