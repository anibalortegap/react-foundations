import React, { Component } from 'react';
import './App.css';
import Exercise2 from './exercise-two';
import Contador from './exercise-three';
import Formulario from './exercise-four';

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
//Independent components
function A(props) {
  return <p>Hola {props.name}</p>;
}

//Component B
//Independent components
function B(props) {
  return <p>{props.name}: 10</p>;
}

function App() {
  return (
    <div className="App">
      <MiComponente />
      <MiComponenteDeClase />

      <A name="Anibal" />
      <B name="Anibal" />
      <Exercise2>
        <p>Hola!</p>
        <p>{10 + 20}</p>
      </Exercise2>
      <Contador></Contador>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
