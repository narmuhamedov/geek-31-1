import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import PokemonCard from './PokemonCard';
import { Route, Routes } from 'react-router-dom';
import PokemonInfoPage from './PokemonInfoPage';

const MainPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(20);

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

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="MainPage">
            <h1>Pokemon List</h1>
            <div className="pokemon-list">
                {currentPokemon.map((pokemon, index) => (
                    <Link key={index} to={`/pokemon/${pokemon.name}`}>
                        <PokemonCard pokemon={pokemon} />
                    </Link>
                ))}
            </div>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={Math.ceil(pokemonList.length / pokemonPerPage)}
                onPageChange={(data) => setCurrentPage(data.selected + 1)}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={currentPage - 1} // Устанавливаем текущую страницу
            />

            <Routes>
                <Route path="/pokemon/:name" element={<PokemonInfoPage />} />
            </Routes>
        </div>
    );
};

export default MainPage;
