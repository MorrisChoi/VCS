import React from 'react';
import './App.css';
import Vc_info from './Components/Vc_info'
import Book_Login from './Components/Book_Login'

const App = () => {
  return (
    <div className="App">
       <Book_Login />
      <header className="App-header">
        <Vc_info />
      </header>
    </div>
  );
}

export default App;
