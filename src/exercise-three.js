import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }

  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentarContador}>Aumentar</button>
      </div>
    );
  }
}

export default Contador;
