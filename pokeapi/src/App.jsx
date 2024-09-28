import { useEffect, useState } from "react";
import { getPokemon } from "./services";
import "./App.css";
import PokemonGrid from "./PokemonGrid";

function handleButtonClick(button) {
	button.classList.toggle('pulsado'); /*If the button is pulsed it is going to add this state, otherwise it will delete the state, making the alternation between the two states */
}

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
		<div class="button-container">
			<button class="btn" onClick={ () => handleButtonClick(this)}>Fire</button>
		</div>
			<PokemonGrid pokemons={pokemons} />
		</>	
	);
}

export default App;
