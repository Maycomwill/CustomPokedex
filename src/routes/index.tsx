import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BlankPage } from "../pages/404/404";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { Pokemon } from "../pages/Pokemon/Pokemon";
import { Ability } from "../pages/Ability/Ability";
import { Type } from "../pages/Type";
import Test from "../pages/Teste/Test";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BlankPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Test />} />
        <Route path="/pokedex/:generationid" element={<Pokedex />} />
        <Route path="/pokemon/:pokemonname" element={<Pokemon />} />
        <Route path="/ability/:abilityname" element={<Ability />} />
        <Route path="/type/:typename" element={<Type />} />
      </Routes>
    </Router>
  );
}
