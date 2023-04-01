import React from 'react';
import {Routes, Route} from 'react-router-dom'; 
import Pokemons from './pokemonId/Pokemons';
import PokemonId from './pokemonId/PokemonId'

function App() {
  return (
    <Routes>
      <Route path="/pokemon">
          <Route index element={<Pokemons/>}/>
          <Route path=':pokemonId' element={<PokemonId/>} />
        </Route>
    </Routes>
  )
}

export default App;
