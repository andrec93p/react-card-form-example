import React, {ReactElement} from 'react';
import './App.css';
import CardListWrapper from './components/CardListWrapper';
import {NavBar} from './NavBar';




function App(): ReactElement | null {
  return (
    <>

    <div className="App">
      <header className="App-header">
        <h1>Card form example</h1>
        <NavBar/>
      </header>

      <CardListWrapper/>
    </div>
    
      
    
    </>
    
  );
}

export default App;
