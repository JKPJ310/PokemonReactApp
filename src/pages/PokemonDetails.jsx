import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemon";
import typeColors from "../utils/typeColors";

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
    <div className="mx-auto max-w-2xl">
      <Link to="/" className="mb-4 inline-block font-medium text-red-600 hover:underline">
        Back to list
      </Link>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-extrabold capitalize">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="mx-auto my-4 h-64 w-64 object-contain"
        />

        <div className="mb-6 flex justify-center gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={`rounded-full px-4 py-1 text-sm font-semibold capitalize text-white ${typeColors[t.type.name] ?? "bg-gray-400"}`}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-sm text-slate-500">Height</p>
            <p className="text-xl font-bold">{pokemon.height / 10} m</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-sm text-slate-500">Weight</p>
            <p className="text-xl font-bold">{pokemon.weight / 10} kg</p>
          </div>
        </div>

        <h2 className="mb-2 text-xl font-bold">Abilities</h2>
        <div className="flex flex-wrap gap-2">
          {pokemon.abilities.map((a) => (
            <span
              key={a.ability.name}
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-1 font-medium capitalize text-red-700"
            >
              {a.ability.name.replace("-", " ")}
              {a.is_hidden && <span className="ml-1 text-xs text-red-400">(hidden)</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;