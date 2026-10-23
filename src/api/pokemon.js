const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 20, offset = 0) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon list");
  return res.json();
};

export const getPokemonDetails = async (name) => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error("Pokémon not found");
  return res.json();
};