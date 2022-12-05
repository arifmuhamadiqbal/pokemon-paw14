import React from "react";
import { Link } from "react-router-dom";

let Pokemon = ({ name, id }) => {
    return (
        <div className="pokemon-card">
            <div className="pokemon-item">
                <h2>{name}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} />
            </div>
            <Link to={`/pokemon/${id}`}
                className="modal-btn-close">Details</Link>
        </div>
    );
};

export default Pokemon;