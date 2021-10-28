import React, { Component } from "react";
import Pokemon from "./pokemons";

class Pokedex extends Component {
  render() {
    const { pokemons: pokemonsList } = this.props;
    return (
      pokemonsList.map(poke => (
        <Pokemon pok={poke} key={poke.id}/>
      ))
    )
  }
}

export default Pokedex;