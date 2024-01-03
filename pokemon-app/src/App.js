// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import PokemonInfoPage from './PokemonInfoPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/pokemon/:name" element={<PokemonInfoPage />} />
            </Routes>
        </Router>
    );
};

export default App;
