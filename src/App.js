import React from 'react';
import Sidebar from './Sidebar';
import SearchFilter from './SearchFilter';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '240px', padding: '20px' }}>
        <h1>Content Area</h1>
        <SearchFilter />
      </div>
    </div>
  );
};

export default App;
