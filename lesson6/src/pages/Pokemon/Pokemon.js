import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import classes from './pokemon.module.css';


const Pokemon = () => {

  const [ pokemonList, setPokemonList ] = useState([]);
  console.log(pokemonList);

  const getPokemonList = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      return data.results
    } catch(e) {
      console.log('Error', e.message);

    }
  }
  useEffect(() => {
    getPokemonList().then((pokemonList)=> setPokemonList(pokemonList))
  }, []);

  return (
    <div className={classes.list}>
      {pokemonList.map(pokemon=> <PokemonCard pokemonProps={pokemon}/> )}
    </div>
  );
};

export default Pokemon;