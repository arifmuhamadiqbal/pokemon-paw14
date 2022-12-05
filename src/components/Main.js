import React, { useState, useEffect } from "react";
import HubungiKamiForm from "./HubungiKamiForm";
import Pokemon from "./Pokemon";
import axios from "axios";


export const Main = () => {
  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => {
    PokemonAPI();
  }, []);

  // get data from API
  const PokemonAPI =  () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then(res => {
        setpokemonList(res.data.results);
      });
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="hello-container">
          <h1>Hello, Pokemon hunter</h1>
          <h2>Selamat datang di dunia Pokemon</h2>
        </div>
        <div className="pokemon-container">
          <h3>List Pokemon</h3>
          <div className="list-card">
            {pokemonList.map((pokemon, index) => {
              return <Pokemon key={index} name={pokemon.name} id={index + 1} />;
            })}
          </div>
        </div>
        <div className="hubungiKami-container">
          <h2>Hubungi Kami</h2>
          <HubungiKamiForm />
        </div>
      </div>
    </div>
  );
};