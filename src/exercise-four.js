import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  syncEmailChanges(email) {
    this.setState({
      email: email,
    });
  }

  syncPasswordChanges(password) {
    this.setState({
      password: password,
    });
  }

  //refactoring less verbose code

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={(ev) => {
            this.syncChanges(ev.target.value, 'email');
          }}
          type="email"
          value={this.state.email}
          placeholder="test@test.com"
        />
        <input
          onChange={(ev) => {
            this.syncChanges(ev.target.value, 'password');
          }}
          type="password"
          value={this.state.password}
          placeholder="**********"
        />
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar sesión"
          />
        </div>
      </form>
    );
  }
}

export default Formulario;
