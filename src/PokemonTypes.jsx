import React from "react";

const PokemonTypes = ({ types }) => {
	console.log(types);
	return (
		<div className="types-container">
			{types.map((type) => (
				<img
					key={type}
					src={`/types/${type}.png`}
					alt={type}
					className="type-icon"
				/>
			))}
		</div>
	);
};

export default PokemonTypes;
