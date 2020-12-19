import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';


import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
    </div>
  );
}

export default App;
