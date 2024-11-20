import Game_National from '@/assets/games/gen0/1.png';
import Game_Red from '@/assets/games/gen1/1.png';
import Game_Blue from '@/assets/games/gen1/2.png';
import Game_Yellow from '@/assets/games/gen1/3.png';
import Game_Gold from '@/assets/games/gen2/1.png';
import Game_Silver from '@/assets/games/gen2/2.png';
import Game_Crystal from '@/assets/games/gen2/3.png';
import Game_Ruby from '@/assets/games/gen3/1.png';
import Game_Sapphire from '@/assets/games/gen3/2.png';
import Game_Emerald from '@/assets/games/gen3/3.png';
import Game_FireRed from '@/assets/games/gen3/remake_gen1/1.png';
import Game_LeafGreen from '@/assets/games/gen3/remake_gen1/2.png';
import Game_Diamond from '@/assets/games/gen4/1.png';
import Game_Pearl from '@/assets/games/gen4/2.png';
import Game_Platinum from '@/assets/games/gen4/3.png';
import Game_HeartGold from '@/assets/games/gen4/remake_gen2/1.png';
import Game_SoulSilver from '@/assets/games/gen4/remake_gen2/2.png';
import Game_Black from '@/assets/games/gen5/1.png';
import Game_White from '@/assets/games/gen5/2.png';
import Game_Black_2 from '@/assets/games/gen5/3.png';
import Game_White_2 from '@/assets/games/gen5/4.png';
import Game_X from '@/assets/games/gen6/1.png';
import Game_Y from '@/assets/games/gen6/2.png';
import Game_Omega_Ruby from '@/assets/games/gen6/remake_gen3/1.png';
import Game_Alpha_Sapphire from '@/assets/games/gen6/remake_gen3/2.png';
import Game_Sun from '@/assets/games/gen7/1.png';
import Game_Moon from '@/assets/games/gen7/2.png';
import Game_Ultra_Sun from '@/assets/games/gen7/3.png';
import Game_Ultra_Moon from '@/assets/games/gen7/4.png';
import Game_Lets_Go_Pikachu from '@/assets/games/gen7/5.png';
import Game_Lets_Go_Eevee from '@/assets/games/gen7/6.png';
import Game_Sword from '@/assets/games/gen8/1.png';
import Game_Shield from '@/assets/games/gen8/2.png';
import Game_Arceus from '@/assets/games/gen8/3.png';
import Game_Brilliant_Diamond from '@/assets/games/gen8/remake_gen4/1.png';
import Game_Shining_Pearl from '@/assets/games/gen8/remake_gen4/2.png';
import Game_Scarlet from '@/assets/games/gen9/1.png';
import Game_Violet from '@/assets/games/gen9/2.png';
import { BackToTop } from '@/components/BackToTop/BackToTop';

import GenerationGamesCard from '@/components/GenerationGamesCard';
function Games() {
  return (
    <div className="animate-surge-in-bottom grid grid-cols-1 place-content-start place-items-center items-start gap-4 gap-y-6 px-1 lg:grid-cols-2">
      <GenerationGamesCard
        generation={1}
        games={[
          { name: 'Pokémon Red', picture: Game_Red, pokedex: ['2'] },
          { name: 'Pokémon Blue', picture: Game_Blue, pokedex: ['2'] },
          { name: 'Pokémon Yellow', picture: Game_Yellow, pokedex: ['2'] },
        ]}
      />
      <GenerationGamesCard
        generation={2}
        games={[
          { name: 'Pokémon Gold', picture: Game_Gold, pokedex: ['3'] },
          { name: 'Pokémon Silver', picture: Game_Silver, pokedex: ['3'] },
          { name: 'Pokémon Crystal', picture: Game_Crystal, pokedex: ['3'] },
        ]}
      />
      <GenerationGamesCard
        generation={3}
        games={[
          { name: 'Pokémon Ruby', picture: Game_Ruby, pokedex: ['4'] },
          { name: 'Pokémon Sapphire', picture: Game_Sapphire, pokedex: ['4'] },
          { name: 'Pokémon Emerald', picture: Game_Emerald, pokedex: ['4'] },
        ]}
        remakes={[
          { name: 'Pokémon FireRed', picture: Game_FireRed, pokedex: ['2'] },
          {
            name: 'Pokémon LeafGreen',
            picture: Game_LeafGreen,
            pokedex: ['2'],
          },
        ]}
      />
      <GenerationGamesCard
        generation={4}
        games={[
          { name: 'Pokémon Diamond', picture: Game_Diamond, pokedex: ['5'] },
          { name: 'Pokémon Pearl', picture: Game_Pearl, pokedex: ['5'] },
          { name: 'Pokémon Platinum', picture: Game_Platinum, pokedex: ['6'] },
        ]}
        remakes={[
          {
            name: 'Pokémon HeartGold',
            picture: Game_HeartGold,
            pokedex: ['7'],
          },
          {
            name: 'Pokémon SoulSilver',
            picture: Game_SoulSilver,
            pokedex: ['7'],
          },
        ]}
      />
      <GenerationGamesCard
        generation={5}
        games={[
          { name: 'Pokémon Black', picture: Game_Black, pokedex: ['8'] },
          { name: 'Pokémon White', picture: Game_White, pokedex: ['8'] },
          { name: 'Pokémon Black 2', picture: Game_Black_2, pokedex: ['9'] },
          { name: 'Pokémon White 2', picture: Game_White_2, pokedex: ['9'] },
        ]}
      />
      <GenerationGamesCard
        generation={6}
        games={[
          { name: 'Pokémon X', picture: Game_X, pokedex: ['12', '13', '14'] },
          { name: 'Pokémon Y', picture: Game_Y, pokedex: ['12', '13', '14'] },
        ]}
        remakes={[
          {
            name: 'Pokémon Omega Ruby',
            picture: Game_Omega_Ruby,
            pokedex: ['15'],
          },
          {
            name: 'Pokémon Alpha Sapphire',
            picture: Game_Alpha_Sapphire,
            pokedex: ['15'],
          },
        ]}
      />
      <GenerationGamesCard
        generation={7}
        games={[
          {
            name: 'Pokémon Sun',
            picture: Game_Sun,
            pokedex: ['16', '17', '18', '19', '20'],
          },
          {
            name: 'Pokémon Moon',
            picture: Game_Moon,
            pokedex: ['16', '17', '18', '19', '20'],
          },
          {
            name: 'Pokémon Ultra Sun',
            picture: Game_Ultra_Sun,
            pokedex: ['21', '22', '23', '24', '25'],
          },
          {
            name: 'Pokémon Ultra Moon',
            picture: Game_Ultra_Moon,
            pokedex: ['21', '22', '23', '24', '25'],
          },
          {
            name: "Pokémon Let's Go Pikachu",
            picture: Game_Lets_Go_Pikachu,
            pokedex: ['26'],
          },
          {
            name: "Pokémon Let's Go Eevee",
            picture: Game_Lets_Go_Eevee,
            pokedex: ['26'],
          },
        ]}
      />
      <GenerationGamesCard
        generation={8}
        games={[
          {
            name: 'Pokémon Sword',
            picture: Game_Sword,
            pokedex: ['27', '28', '29'],
          },
          {
            name: 'Pokémon Shield',
            picture: Game_Shield,
            pokedex: ['27', '28', '29'],
          },
          {
            name: 'Pokémon Legend Arceus',
            picture: Game_Arceus,
            pokedex: ['30'],
          },
        ]}
        remakes={[
          {
            name: 'Pokémon Brilliant Diamond',
            picture: Game_Brilliant_Diamond,
            pokedex: ['5'],
          },
          {
            name: 'Pokémon Shining Pearl',
            picture: Game_Shining_Pearl,
            pokedex: ['5'],
          },
        ]}
      />
      <GenerationGamesCard
        generation={9}
        games={[
          { name: 'Pokémon Scarlet', picture: Game_Scarlet, pokedex: ['31'] },
          { name: 'Pokémon Violet', picture: Game_Violet, pokedex: ['31'] },
        ]}
      />
      <GenerationGamesCard
        games={[
          {
            name: 'National Pokédex',
            picture: Game_National,
            pokedex: ['1'],
          },
        ]}
      />
      <BackToTop />
    </div>
  );
}

export default Games;
