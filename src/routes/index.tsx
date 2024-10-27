import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BlankPage } from '../pages/404/404';
import { Home } from '../pages/Home/Home';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { Pokemon } from '../pages/Pokemon/Pokemon';
import { Ability } from '../pages/Ability/Ability';
import { Type } from '../pages/TypePage/Type';

import Moves from '../pages/Moves/Moves';
import Test from '@/pages/Teste/Test';
import Regions from '@/pages/Regions/Regions';
import Types from '@/pages/Types/Types';
import Upcoming from '@/pages/Upcoming/Upcoming';

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Upcoming />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/teste" element={<Test />} /> */}
        <Route path="/regions/:generationid" element={<Pokedex />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/types" element={<Types />} />
        <Route path="/pokemon/:pokemonname" element={<Pokemon />} />
        <Route path="/ability/:abilityname" element={<Ability />} />
        <Route path="/moves/:moveName" element={<Moves />} />
        <Route path="/type/:typename" element={<Type />} />
      </Routes>
    </Router>
  );
}
