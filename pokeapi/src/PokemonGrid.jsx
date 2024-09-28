import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemons }) => {
	return (
		<div className="grid-container">
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokemonGrid;
