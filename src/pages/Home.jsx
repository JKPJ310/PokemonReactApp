import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonList } from "../api/pokemon";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemonList(20)
      .then((data) => setPokemon(data.results))
      .catch(() => setError("Failed to load Pokémon."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Browse Pokémon</h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {pokemon.map((p) => (
          <PokemonCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Home