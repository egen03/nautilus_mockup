import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage'
import Navbar from './Components/NavBar'
import Spotlight from './Components/spotlight';

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Navbar />
      <div>
      <Spotlight />
      </div>
    </div>
  );
}

export default App;
