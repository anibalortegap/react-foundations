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

//Use Props - functional Props
//Component A
function A(props) {
  return <p>Hola {props.name}</p>;
}

//Component B
function B(props) {
  return <p>{props.name}: 10</p>;
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

      <A name="Anibal" />
      <B name="Anibal" />
    </div>
  );
}

export default App;
