import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonComponent } from './Button';
import { log } from 'console';

function App() {
  const clicked=()=>{
    console.log("button clicked ");
    
  }
  return (
    <div className="App">
      <ButtonComponent label='This is label' onClick={clicked} primary={true}/>
   
    </div>
  );
}

export default App;
