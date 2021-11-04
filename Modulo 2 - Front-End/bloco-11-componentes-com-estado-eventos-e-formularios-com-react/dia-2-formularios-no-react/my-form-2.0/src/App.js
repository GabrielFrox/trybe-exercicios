import React, { Component } from 'react';
import './App.css';
import FirstField from './FirstField';
import SecondField from './SecondField';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residence: '',
      curriculum: '',
      cargo: '',
      resumoCargo: '',
    }
    this.handleChanges = this.handleChanges.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  handleChanges({ target }) {
    let { name, value } = target;
    if (name === "name") value = value.toUpperCase();
    if (name === "adress") value = this.validateAddress(value)

    this.setState({
      [name]: value,
    })
  }

  clearAll() {
    this.setState({
      // name: '',
      // email: '',
      // cpf: '',
      address: '',
      // city: '',
      // state: '',
      // residence: '',
      // curriculum: '',
      // cargo: '',
      // resumoCargo: '',
    })
  }

  alertHandler() {
    if (sessionStorage.getItem('alert') === 'false') alert("Preencha com cuidado essa informação");
    sessionStorage.setItem('alert', 'true');
  }

  onBlurHandler({target}) {
    // Gabarito, não entendo regex
    target.value = target.value.match(/^\d/) ? '' : target.value;
  }

  // Gabarito, regex ainda é um mistério para mim
  validateAddress = address => address.replace(/[^\w\s]/gi, '');

  render() {
    return (
      <form>
        <FirstField onBlurHandler={this.onBlurHandler} handleChanges={this.handleChanges} value={this.state} />
        <SecondField alertHandler={this.alertHandler} handleChanges={this.handleChanges} value={this.state} />
        <button type="submit">Enviar!</button>
        <button onClick={this.clearAll}>Limpar!</button>
      </form>
    )
  }
}

export default App;
