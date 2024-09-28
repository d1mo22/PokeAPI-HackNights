import { useEffect, useState } from "react";
import { getPokemon } from "./services";
import "./App.css";
import PokemonGrid from "./PokemonGrid";

function App() {
	const [pokemons, setPokemons] = useState([]);

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
			<PokemonGrid pokemons={pokemons} />
		</>
	);
}

export default App;
