import { useParams } from "react-router-dom";
import Informacao from '../componentes/pokemon/informacao';
import React from 'react';

export default function PokemonId(){
  const [pokemon, setPokemon] = React.useState();
  const{ pokemonId} = useParams();

  function Carregar() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        return setPokemon(data);
      });
  }

  React.useEffect(()=>{
    Carregar()
  }, [])

  return (
    pokemon ? (
      <div>
        <Informacao imagem={pokemon.sprites.front_default} nome={pokemon.name} 
        abilidade={pokemon.abilities.map(data => data.ability.name)} tipo={pokemon.types.map(data => data.type.name)}
        altura={pokemon.height} />
        <div class="col-10 mx-auto">
      </div>
      </div>
    )

    :
      <div>
        Carregando
      </div>

      
  );
}

