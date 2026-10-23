import React from 'react'
import { Link } from "react-router-dom";

function PokemonCard({ name, url }) {
  const id = url.split("/").filter(Boolean).pop();
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      to={`/pokemon/${name}`}
      className="group rounded-2xl bg-white p-4 text-center shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="mx-auto h-32 w-32 object-contain transition group-hover:scale-110"
      />
      <p className="mt-2 text-sm text-slate-400">#{id.padStart(3, "0")}</p>
      <p className="text-lg font-semibold capitalize">{name}</p>
    </Link>
  );
}

export default PokemonCard