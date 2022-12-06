import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonIntroduction from './components/PokemonIntroduction';
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokemon-paw14' element={<PokemonList />} />
        <Route path='/pokemon/:id' element={<PokemonIntroduction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
