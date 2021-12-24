import React from 'react';
import { ActivityFeed } from './components';

import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ActivityFeed />
    </div>
  );
};

export default App;
