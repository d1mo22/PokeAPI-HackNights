interface Pokemon {
	name: string;
	types: string[];
}

export const getPokemon = async (id: number) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();
	const pokemon: Pokemon = {
		name: data.name,
		types: data.types.map((type: any) => type.type.name),
	};
	return pokemon;
};
