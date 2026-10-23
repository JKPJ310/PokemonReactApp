import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemon";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPokemonDetails(name)
      .then(setPokemon)
      .catch(() => setError("Pokémon not found."))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Link to="/"> Back</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height} | Weight: {pokemon.weight}</p>
      <h2>Types</h2>
      <ul>{pokemon.types.map((t) => <li key={t.type.name}>{t.type.name}</li>)}</ul>
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>
            {a.ability.name} {a.is_hidden && "(hidden)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;