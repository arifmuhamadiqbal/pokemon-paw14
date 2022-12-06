import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function PokemonIntroduction() {
  const { id } = useParams();
  const [pokemonDetails, setpokemonDetails] = useState();
  const [pokemonDescription, setpokemonDescription] = useState();

  useEffect(() => {
    APIPokemon();
  }, []);

  // get datafrom API
  const APIPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
      console.log(res.data);
      setpokemonDetails(res.data);
      axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      ).then(description => {
        console.log(description.data);
        setpokemonDescription(description.data);
      });
    });
  };

  return (
    <div className="container-detail">
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={`Foto Pokemon ${id}`}
        />
      </div>
      <div className="flex-col">
        <h1 style={{ margin: "0" }}>
          {pokemonDetails && pokemonDetails.species.name}
        </h1>
        <span>
          {pokemonDescription &&
            pokemonDescription.flavor_text_entries
              .filter((item) => {
                return item.version.name === "sapphire";
              })
              .map((item, index) => <p key={index}>{item.flavor_text}</p>)}
        </span>
        <span>
          <strong>Abilities: </strong>
          {pokemonDetails &&
            pokemonDetails.abilities.map((item, index) => (
              <ul key={index}>
                <li>{item.ability.name}</li>
              </ul>
            ))}
        </span>
        <span>
          <strong>Species: </strong>
          {pokemonDetails && pokemonDetails.name}
        </span>
        <span>
          <strong>Height: </strong>
          {pokemonDetails && pokemonDetails.height}
        </span>
        <span>
          <strong>Habitat: </strong>
          {pokemonDescription && pokemonDescription.habitat.name}
        </span>
        <span>
          <strong>Color: </strong>
          {pokemonDescription && pokemonDescription.color.name}
        </span>
        <span>
          <strong>Growth Rate: </strong>
          {pokemonDescription && pokemonDescription.growth_rate.name}
        </span>
        <span>
          <strong>Shape: </strong>
          {pokemonDescription && pokemonDescription.shape.name}
        </span>
        <span>
          <strong>Genus: </strong>
          {pokemonDescription &&
            pokemonDescription.genera
              .filter((item) => {
                return item.language.name === "en";
              })
              .map((item) => ` ${item.genus}`)}
        </span>
        <span>
          <strong>Types: </strong>
          {pokemonDetails &&
            pokemonDetails.types.map((item, index) => (
              <ul key={index}>
                <li>{item.type.name}</li>
              </ul>
            ))}
        </span>
        <Link to={"/pokemon-paw14"} className="modal-btn-close">
          Back
        </Link>
      </div>
    </div>
  );
}
