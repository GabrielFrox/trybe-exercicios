import React, { Component } from "react";

class SecondField extends Component {
  
  
  render() {
    sessionStorage.setItem('alert', 'false');
    const { alertHandler, handleChanges, value } = this.props;

    return (
      <fieldset>
        <label htmlFor="text">
          Resumo do seu currículo:
          <textarea id="text" value={value.curriculum} onChange={handleChanges} required name="curriculum" cols="30" rows="10" maxLength="1000" />
        </label>
        <label htmlFor="cargo">
          Último cargo:
          <textarea id="cargo" onMouseEnter={alertHandler} value={value.cargo} onChange={handleChanges} required name="cargo" cols="30" rows="3" maxLength="40" />
        </label>
        <label htmlFor="cargoDesciption">
          Resumo do último cargo:
          <textarea maxLength="500" value={value.resumoCargo} onChange={handleChanges} name="resumoCargo" required id="cargoDescription" cols="30" rows="7" />
        </label>
      </fieldset>
    )
  }
}

export default SecondField;