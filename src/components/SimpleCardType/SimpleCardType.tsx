import clsx from 'clsx';
import { poketypesComponents } from '../pokemonTypes/objects/objects';

interface ISimpleTypeCardProps {
  pokemonType: string;
  double_damage_relation: boolean;
}

function SimpleCardType({
  pokemonType,
  double_damage_relation = false,
}: ISimpleTypeCardProps) {
  // console.log("simple type card", double_damage_relation)
  if (double_damage_relation) {
    return (
      <div
        className={clsx(
          'flex h-20 w-20 items-center justify-center rounded-full',
          {
            'bg-backgroundCard-bug': pokemonType === 'bug',
            'bg-backgroundCard-dark': pokemonType === 'dark',
            'bg-backgroundCard-dragon': pokemonType === 'dragon',
            'bg-backgroundCard-electric': pokemonType === 'electric',
            'bg-backgroundCard-fairy': pokemonType === 'fairy',
            'bg-backgroundCard-flying': pokemonType === 'flying',
            'bg-backgroundCard-fire': pokemonType === 'fire',
            'bg-backgroundCard-fighting': pokemonType === 'fighting',
            'bg-backgroundCard-ghost': pokemonType === 'ghost',
            'bg-backgroundCard-grass': pokemonType === 'grass',
            'bg-backgroundCard-ground': pokemonType === 'ground',
            'bg-backgroundCard-ice': pokemonType === 'ice',
            'bg-backgroundCard-normal': pokemonType === 'normal',
            'bg-backgroundCard-poison': pokemonType === 'poison',
            'bg-backgroundCard-psychic': pokemonType === 'psychic',
            'bg-backgroundCard-rock': pokemonType === 'rock',
            'bg-backgroundCard-steel': pokemonType === 'steel',
            'bg-backgroundCard-water': pokemonType === 'water',
          },
        )}
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
          {poketypesComponents({
            height: 25,
            width: 25,
            pokemonType,
          })}

          <div className="absolute bottom-0 left-1/2 right-0 top-full flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
            <span>4x</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        'flex h-20 w-20 items-center justify-center rounded-full',
        {
          'bg-backgroundCard-bug': pokemonType === 'bug',
          'bg-backgroundCard-dark': pokemonType === 'dark',
          'bg-backgroundCard-dragon': pokemonType === 'dragon',
          'bg-backgroundCard-electric': pokemonType === 'electric',
          'bg-backgroundCard-fairy': pokemonType === 'fairy',
          'bg-backgroundCard-flying': pokemonType === 'flying',
          'bg-backgroundCard-fire': pokemonType === 'fire',
          'bg-backgroundCard-fighting': pokemonType === 'fighting',
          'bg-backgroundCard-ghost': pokemonType === 'ghost',
          'bg-backgroundCard-grass': pokemonType === 'grass',
          'bg-backgroundCard-ground': pokemonType === 'ground',
          'bg-backgroundCard-ice': pokemonType === 'ice',
          'bg-backgroundCard-normal': pokemonType === 'normal',
          'bg-backgroundCard-poison': pokemonType === 'poison',
          'bg-backgroundCard-psychic': pokemonType === 'psychic',
          'bg-backgroundCard-rock': pokemonType === 'rock',
          'bg-backgroundCard-steel': pokemonType === 'steel',
          'bg-backgroundCard-water': pokemonType === 'water',
        },
      )}
    >
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white p-1">
        {poketypesComponents({
          height:
            pokemonType === 'steel' ||
            pokemonType === 'ice' ||
            pokemonType === 'rock'
              ? 21
              : 25,
          width:
            pokemonType === 'grass'
              ? 27
              : pokemonType === 'bug' ||
                  pokemonType === 'fire' ||
                  pokemonType === 'dragon'
                ? 23
                : 25,
          pokemonType,
        })}
      </div>
    </div>
  );
}

export default SimpleCardType;
