interface Pokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	ability: string[];
	types: string[];
}

export const getPokemon = async (id: number): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();
	const pokemon: Pokemon = {
		id: data.id,
		name: data.name,
		height: data.height / 10,
		weight: data.weight / 10,
		ability: data.abilities[0].ability.name, // Asumiendo que tomamos la primera habilidad
		types: data.types.map((type: any) => type.type.name),
	};
	return pokemon;
};
