import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

//Create functional component
function MiComponente() {
  return <p>Hola Mundo</p>;
}

//Create class component

class MiComponenteDeClase extends Component {
  render() {
    return <p>Hola Mundo - Componente de clase</p>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiComponente />
      <MiComponenteDeClase />
    </div>
  );
}

export default App;
