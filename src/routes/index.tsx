import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { Pokemon } from '../pages/Pokemon/Pokemon';
import { Ability } from '../pages/Ability/Ability';
import { Type } from '../pages/TypePage/Type';

import Moves from '../pages/Moves/Moves';
import Regions from '@/pages/Regions/Regions';
import Types from '@/pages/Types/Types';
import Upcoming from '@/pages/Upcoming/Upcoming';
import Move from '../pages/Move/Move';
import Games from '@/pages/Games/Games';
import Game from '@/pages/Game/Game';

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
        <Route path="/moves/:moveName" element={<Move />} />
        <Route path="/moves" element={<Moves />} />
        <Route path="/type/:typename" element={<Type />} />
        <Route path="games" element={<Games />} />
        <Route path="games/:gameName" element={<Game />} />
      </Routes>
    </Router>
  );
}
