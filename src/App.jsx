import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;