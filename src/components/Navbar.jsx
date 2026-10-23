import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-600 shadow-md">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
          Pokédex
        </Link>
      </div>
    </nav>
  );
}