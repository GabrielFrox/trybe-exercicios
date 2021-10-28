import './App.css';
import Pokedex from './pokedex';
import pokemons from './data';

function App() {
  return (
    <main>
      <h1>Pokédex</h1>
      <div className='cells-container'>
        <Pokedex pokemons={pokemons}></Pokedex>
      </div>
    </main>
  );
}

export default App;
