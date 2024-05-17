import React, {ReactElement} from 'react';
import './App.css';
import CardListWrapper from './components/CardListWrapper';

function App(): ReactElement | null {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Card form example</h1>
      </header>

      <CardListWrapper/>
    </div>
  );
}

export default App;
