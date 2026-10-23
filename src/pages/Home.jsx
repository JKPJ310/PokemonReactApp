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
      <h1>Pokémon</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home