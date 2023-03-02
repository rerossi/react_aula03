import React from 'react';
import Informacao from './componentes/pokemon/informacao';

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [count, setCount] = React.useState(1);

  function Proximo() {
    setCount(count + 1);
    Carregar();
  }



  function Carregar() {
    console.log(count);
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then((response) => response.json())
      .then((data) => {
        return setPokemon(data);
      });
  }


  return (
    pokemon.sprites ? (
      <div>
        <Informacao imagem={pokemon.sprites.front_default} nome={pokemon.name} 
        abilidade={pokemon.abilities.map(data => data.ability.name)} tipo={pokemon.types.map(data => data.type.name)}
        altura={pokemon.height} />
        <div class="col-10 mx-auto">
        <button onClick={Proximo} type="button" class="btn btn-success btn-lg mt-1">ver proximo</button>
      </div>
      </div>




    )

    :
      <div>
        <button onClick={Carregar}>Carregar</button>
      </div>

      
  );
}

export default App;
