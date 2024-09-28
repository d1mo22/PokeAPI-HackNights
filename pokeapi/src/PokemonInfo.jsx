import React from "react";
import { capitalizeFirstLetter } from "./services/utils";
import PokemonTypes from "./PokemonTypes";

const PokemonInfo = ({ pokemon }) => {
	return (
		<div className="pokemon-info">
			<img
				className="sprite"
				src={`/sprites/${pokemon.id}.svg`}
				alt={pokemon.name}
			/>
			<div>
				<h2>
					{capitalizeFirstLetter(pokemon.name)} #{pokemon.id}
				</h2>
				<PokemonTypes types={pokemon.types} />
				<p>
					<strong>Weight:</strong> {pokemon.weight}kg
				</p>
				<p>
					<strong>Height:</strong> {pokemon.height}m
				</p>
				<p>
					<strong>Abilities:</strong> {capitalizeFirstLetter(pokemon.ability)}
				</p>
			</div>
		</div>
	);
};

export default PokemonInfo;
