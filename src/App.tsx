import React from 'react';
import { Avatar, Text } from './components'
import data from './transactions.json';

function App() {
  return (
    <div className="App">
      <Avatar src={data.avatar} alt="" />
    </div>
  );
}

export default App;
