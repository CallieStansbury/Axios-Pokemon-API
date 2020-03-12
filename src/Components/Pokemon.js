import React, { useState } from 'react';
import axios from 'axios';

    const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    function getPokemon() {
      axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=964")
        .then(response => {
          setPokemon(response.data.results)})
        .catch(err=>{
          console.log(err);
        })
      };
    return (
        <div>
        <button className="button" onClick={getPokemon}>Fetch Pokemon</button>
        <ul className="poke-list">
        {pokemon.map((poke, index) => (
            <li key={index}>{poke.name}</li>
            ))}
        </ul>
        </div>
    )
}

export default Pokemon;