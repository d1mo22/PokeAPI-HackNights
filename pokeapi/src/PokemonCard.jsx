import React from "react";
import { getGradient } from "./services/utils";
import PokemonInfo from "./PokemonInfo";

const PokemonCard = ({ pokemon }) => {
	return (
		<div
			className="grid-item"
			style={{ background: getGradient(pokemon.types) }}
		>
			<PokemonInfo pokemon={pokemon} />
		</div>
	);
};

export default PokemonCard;
