import { useEffect, useState } from "react";
import { getPokemon } from "./services";
import "./App.css";
import Card from "./Card";

const getTypeColor = (type) => {
	const typeColors = {
		grass: "#78C850",
		fire: "#F08030",
		water: "#6890F0",
		electric: "#F8D030",
		ice: "#98D8D8",
		fighting: "#C03028",
		poison: "#A040A0",
		ground: "#E0C068",
		flying: "#A890F0",
		psychic: "#F85888",
		bug: "#A8B820",
		rock: "#B8A038",
		ghost: "#705898",
		dragon: "#7038F8",
		dark: "#705848",
		steel: "#B8B8D0",
		fairy: "#EE99AC",
		normal: "#A8A878",
	};
	return typeColors[type] || "#A8A878"; // Color por defecto si el tipo no está en el objeto
};

const uppercaseFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const getGradient = (types) => {
	if (types.length === 1) {
		return getTypeColor(types[0]);
	}
	const color1 = getTypeColor(types[0]);
	const color2 = getTypeColor(types[1]);
	return `linear-gradient(45deg, ${color1}, ${color2})`;
};

function App() {
	const [pokemon, setPokemons] = useState([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const promises = [];
			for (let i = 1; i <= 151; i++) {
				promises.push(getPokemon(i));
			}
			const results = await Promise.all(promises);
			setPokemons(results);
		};
		fetchPokemons();
	}, []);

	return (
		<>
			<div className="grid-container">
				{pokemon.map((pokemon) => (
					<div
						key={pokemon.id}
						className="grid-item"
						style={{ background: getGradient(pokemon.types) }}
					>
						<h1>{uppercaseFirstLetter(pokemon.name)}</h1>
						<p>{pokemon.types.map(uppercaseFirstLetter).join(" ")}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
