import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BlankPage } from "../pages/404/404";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { Pokemon } from "../pages/Pokemon/Pokemon";
import { Ability } from "../pages/Ability/Ability";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BlankPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/pokedex/:generationid" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonname" element={<Pokemon />} />
        <Route path="/ability/:abilityname" element={<Ability />} />
      </Routes>
    </Router>
  );
}
