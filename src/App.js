// src/App.js
import React from 'react';
import CategoryMenu from './components/CategoryMenu';
import mockData from './data/mockData';

function App() {
  return (
    <div className="App">
      <CategoryMenu categories={mockData} />
    </div>
  );
}

export default App;
