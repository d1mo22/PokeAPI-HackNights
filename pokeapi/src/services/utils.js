export const getTypeColor = (type) => {
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

export const getGradient = (types) => {
	if (types.length === 1) {
		return getTypeColor(types[0]);
	}
	const color1 = getTypeColor(types[0]);
	const color2 = getTypeColor(types[1]);
	return `linear-gradient(67deg, ${color1}, ${color2})`;
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
