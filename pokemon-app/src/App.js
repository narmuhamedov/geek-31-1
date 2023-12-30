
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const App = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        fetchPokemonList();
    }, []);

    return (
        <div className="App">
            <h1>Pokemon List</h1>
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default App;
