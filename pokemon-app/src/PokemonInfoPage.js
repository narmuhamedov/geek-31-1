// PokemonInfoPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfoPage = () => {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchPokemonData();
    }, [name]);

    return (
        <div className="PokemonInfoPage">
            {pokemonData && (
                <div>
                    <h2>{pokemonData.name}</h2>
                </div>
            )}
        </div>
    );
};

export default PokemonInfoPage;
