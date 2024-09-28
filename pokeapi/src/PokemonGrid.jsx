import React from "react";
import { getGradient, capitalizeFirstLetter } from "./services/utils"; // Asegúrate de exportar estas funciones desde un archivo utils.js

const PokemonGrid = ({ pokemons }) => {
	return (
		<div className="grid-container">
			{pokemons.map((pokemon) => (
				<div
					key={pokemon.id}
					className="grid-item"
					style={{ background: getGradient(pokemon.types) }}
				>
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
							<div className="types-container">
								{pokemon.types.map((type) => (
									<img
										key={type}
										src={`/types/${type}.png`}
										alt={type}
										className="type-icon"
									/>
								))}
							</div>
							<p>
								<strong>Weight:</strong> {pokemon.weight}kg
							</p>
							<p>
								<strong>Height:</strong> {pokemon.height}m
							</p>
							<p>
								<strong>Ability</strong>:{" "}
								{capitalizeFirstLetter(pokemon.ability)}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PokemonGrid;
