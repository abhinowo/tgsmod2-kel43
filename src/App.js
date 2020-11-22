import React from 'react';
import './App.css';
import CompAndProps from './components/CompAndProps';
//import Title from './components/Title';
import frontend from './Frontend';

function App() {
  return (
    <div className="App">
      <frontend/>;
      <header className="topnav">
        <div class="header">
          <h2>Kelompok 43</h2>
        </div>
       </header>
         <div className="Components">
        <CompAndProps bgcolor="#E5E5E5" />
      </div>
    </div>
  );
}

export default App;
