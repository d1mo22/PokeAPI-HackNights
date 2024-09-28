import { useEffect, useState } from "react";
import { getPokemon } from "./services";
import "./App.css";
import PokemonGrid from "./PokemonGrid";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [button, setButton] = useState(false);

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
			<PokemonGrid pokemons={pokemons} />
		</>
	);
}

export default App;
