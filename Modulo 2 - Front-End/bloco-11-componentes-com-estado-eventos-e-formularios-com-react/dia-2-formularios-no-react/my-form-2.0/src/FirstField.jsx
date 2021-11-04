import React, { Component } from "react";

class FirstField extends Component {
  
  states() {
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PR', 'PB', 'PA', 'PE', 'PI', 'RN', 'RS', 'RJ', 'RO', 'RR', 'SC', 'SE', 'SP', 'TO'];
    return (
      states.map((state) => <option key={state} value={state}>{ state }</option>)
    )
  }
  
  render() {
    const { onBlurHandler, handleChanges, value } = this.props;

    return(
      <fieldset className="first-container">
        <label>
          Nome:
          <input required type="text" maxLength="40" name="name" value={value.name} onChange={handleChanges} />
        </label>
        <label>
          Email:
          <input required type="email" maxLength="50" name="email" value={value.email} onChange={handleChanges} />
        </label>
        <label>
          CPF:
          <input required type="text" maxLength="11" name="cpf" value={value.cpf} onChange={handleChanges} />
        </label>
        <label>
          Endereço:
          <input required type="text" maxLength="200" name="adress" value={value.adress} onChange={handleChanges} />
        </label>
        <label>
          Cidade:
          <input required onBlur={onBlurHandler} type="text" maxLength="28" name="city" value={value.city} onChange={handleChanges} />
        </label>
        <label>
          Estado:
          <select required name="state" id="state" onChange={handleChanges}>
            {this.states()}
          </select>
        </label>
        <label>
          Tipo de residência:
          <label htmlFor="house">
            <input required value="house" type="radio" name="residence" id="house" onChange={handleChanges} />
            Casa
          </label>
          <label htmlFor="apartamento">
            <input value="apartament" type="radio" name="residence" id="apartamento" onChange={handleChanges} />
            Apartamento
          </label>
        </label>
      </fieldset>
    )
  }
}

export default FirstField;