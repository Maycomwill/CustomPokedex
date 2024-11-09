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

import GenerationGamesCard from '@/components/GenerationGamesCard';
function Games() {
  return (
    <div className="grid grid-cols-2 place-content-start place-items-center items-start gap-4 gap-y-6">
      <GenerationGamesCard
        generation={1}
        games={[
          { name: 'Pokemon Red', picture: Game_Red },
          { name: 'Pokemon Blue', picture: Game_Blue },
          { name: 'Pokemon Yellow', picture: Game_Yellow },
        ]}
        pokedexLinks={['/pokedex/2']}
      />
      <GenerationGamesCard
        generation={2}
        games={[
          { name: 'Pokemon Gold', picture: Game_Gold },
          { name: 'Pokemon Silver', picture: Game_Silver },
          { name: 'Pokemon Crystal', picture: Game_Crystal },
        ]}
        pokedexLinks={['/pokedex/3']}
      />
      <GenerationGamesCard
        generation={3}
        games={[
          { name: 'Pokemon Ruby', picture: Game_Ruby },
          { name: 'Pokemon Sapphire', picture: Game_Sapphire },
          { name: 'Pokemon Emerald', picture: Game_Emerald },
        ]}
        remakes={[
          { name: 'Pokemon FireRed', picture: Game_FireRed },
          { name: 'Pokemon LeafGreen', picture: Game_LeafGreen },
        ]}
        pokedexLinks={['/pokedex/4']}
      />
      <GenerationGamesCard
        generation={4}
        games={[
          { name: 'Pokemon Diamond', picture: Game_Diamond },
          { name: 'Pokemon Pearl', picture: Game_Pearl },
          { name: 'Pokemon Platinum', picture: Game_Platinum },
        ]}
        remakes={[
          { name: 'Pokemon HeartGold', picture: Game_HeartGold },
          { name: 'Pokemon SoulSilver', picture: Game_SoulSilver },
        ]}
        pokedexLinks={['/pokedex/5']}
      />
      <GenerationGamesCard
        generation={5}
        games={[
          { name: 'Pokemon Black', picture: Game_Black },
          { name: 'Pokemon White', picture: Game_White },
          { name: 'Pokemon Black 2', picture: Game_Black_2 },
          { name: 'Pokemon White 2', picture: Game_White_2 },
        ]}
        pokedexLinks={['/pokedex/6']}
      />
      <GenerationGamesCard
        generation={6}
        games={[
          { name: 'Pokemon X', picture: Game_X },
          { name: 'Pokemon Y', picture: Game_Y },
        ]}
        remakes={[
          { name: 'Pokemon Omega Ruby', picture: Game_Omega_Ruby },
          { name: 'Pokemon Alpha Sapphire', picture: Game_Alpha_Sapphire },
        ]}
        pokedexLinks={['/pokedex/7']}
      />
      <GenerationGamesCard
        generation={7}
        games={[
          { name: 'Pokemon Sun', picture: Game_Sun },
          { name: 'Pokemon Moon', picture: Game_Moon },
          { name: 'Pokemon Ultra Sun', picture: Game_Ultra_Sun },
          { name: 'Pokemon Ultra Moon', picture: Game_Ultra_Moon },
          { name: "Pokemon Let's Go Pikachu", picture: Game_Lets_Go_Pikachu },
          { name: "Pokemon Let's Go Eevee", picture: Game_Lets_Go_Eevee },
        ]}
        pokedexLinks={['/pokedex/8']}
      />
      <GenerationGamesCard
        generation={8}
        games={[
          { name: 'Pokemon Sword', picture: Game_Sword },
          { name: 'Pokemon Shield', picture: Game_Shield },
          { name: 'Pokemon Legend Arceus', picture: Game_Arceus },
        ]}
        remakes={[
          {
            name: 'Pokemon Brilliant Diamond',
            picture: Game_Brilliant_Diamond,
          },
          { name: 'Pokemon Shining Pearl', picture: Game_Shining_Pearl },
        ]}
        pokedexLinks={['/pokedex/9']}
      />
      <GenerationGamesCard
        generation={9}
        games={[
          { name: 'Pokemon Scarlet', picture: Game_Scarlet },
          { name: 'Pokemon Violet', picture: Game_Violet },
        ]}
        pokedexLinks={['/pokedex/10']}
      />
    </div>
  );
}

export default Games;
