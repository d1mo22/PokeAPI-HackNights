import React from "react";
import { getGradient, capitalizeFirstLetter } from "./utils"; // Asegúrate de exportar estas funciones desde un archivo utils.js

const PokemonGrid = ({ pokemons }) => {
	return (
		<div className="grid-container">
			{pokemons.map((pokemon) => (
				<div
					key={pokemon.id}
					className="grid-item"
					style={{ background: getGradient(pokemon.types) }}
				>
					<h1>{capitalizeFirstLetter(pokemon.name)}</h1>
					<p>{pokemon.types.map(capitalizeFirstLetter).join(" ")}</p>
				</div>
			))}
		</div>
	);
};

export default PokemonGrid;
