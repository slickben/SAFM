import React from 'react';
import './App.css';
import SignUp from './component/SignUp'
import Logo from './component/Logo'


function App() {
  return (
    <div className="App">
      <div className="bg-overlay">
        <Logo></Logo>
        <SignUp></SignUp>
      </div>
      
    </div>
  );
}

export default App;
