import React, { useEffect, useState } from 'react';
import classes from './pokemonCard.module.css';
import axios from 'axios';

const PokemonCard = ( {pokemonProps} ) => {

  const [imgPokemon, setImgPokemon] = useState({})
  console.log(imgPokemon);
  const getPokemon = async () => {
    try {
      const { data } = await axios.get(pokemonProps.url)
      return data.sprites.other.dream_world.front_default
    } catch(e) {
      console.log('Error', e.message);

    }
  }

  useEffect(() => {
    getPokemon().then((pokemon)=> setImgPokemon(pokemon))
  }, []);

  return (
    <div className={classes.card}>
      <p>pokemon name: {pokemonProps.name}</p>
      <img src={imgPokemon} alt={pokemonProps.name}/>
    </div>
  );
};

export default PokemonCard;