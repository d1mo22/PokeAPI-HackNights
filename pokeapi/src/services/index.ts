interface Pokemon {
	name: string;
	height: number;
	weight: number;
	abilities: string[];
	types: string[];
	sprite: string;
}

export const getPokemon = async (id: number): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();
	const pokemon: Pokemon = {
		name: data.name,
		height: data.height,
		weight: data.weight,
		abilities: data.abilities[0].ability.name, // Asumiendo que tomamos la primera habilidad
		types: data.types.map((type: any) => type.type.name),
		sprite: `/sprites/${id}.svg`, // Construir la URL del sprite
	};
	return pokemon;
};
