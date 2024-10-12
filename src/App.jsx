import { useEffect, useState } from "react";
import { getPokemon } from "./services";
import "./App.css";
import PokemonGrid from "./PokemonGrid";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
	const [button, setButton] = useState(false);

	function setFilter(type) { 
		let filtered = pokemons;
		if (type !== "allPokemons") filtered = pokemons.filter((pokemon) => pokemon.types.includes(type));
		console.log('Filtered Pokemons:', filtered)
		setFilteredPokemons(filtered); 
	}

	useEffect(() => {
		const fetchPokemons = async () => {
			const promises = [];
			for (let i = 1; i <= 151; i++) {
				promises.push(getPokemon(i));
			}
			const results = await Promise.all(promises);
			setPokemons(results);
			setFilteredPokemons(results);
		};
		fetchPokemons();
	}, []);

	return (
		<>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
					rel="stylesheet"
				/>
			</head>
			<div class="button-container">
				<button
					type="button"
					className={`btn ${button ? "btn-check" : "btn"}`}
					onClick={() => {
						setButton(!button);
						setFilter("allPokemons");
					}}
				>
					All
				</button>

				<button
					type="button"
					className={`btn ${button ? "btn-check" : "btn"}`}
					onClick={() => {
						setButton(!button);
						setFilter("fire");
					}}
				>
					Fire
				</button>

				<button
					type="button"
					className={`btn ${button ? "btn-check" : "btn"}`}
					onClick={() => {
						setButton(!button);
						setFilter("water");
					}}
				>
					Water
				</button>
			</div>
			<PokemonGrid pokemons={filteredPokemons} />
		</>
	);
}

export default App;
