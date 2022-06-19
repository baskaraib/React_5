import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Typograpy from './components/Typograpy';

function App() {
  return (
    <div className="App">
      <Typograpy variant='h1'>Searching</Typograpy>
      <form id="form_input">
        <label >ID user:</label>
        <input type="text" id="id_user" name="id_user"/><br/>
        <label >First name:</label>
        <input type="text" id="name" name="name"/>
      </form>
      <Button variant='secondary'>Search</Button>
    </div>
  );
}

export default App;
