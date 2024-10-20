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
            'bg-backgroundCard-bug-default hover:bg-backgroundCard-bug-dark':
              pokemonType === 'bug',
            'bg-backgroundCard-dark-default hover:bg-backgroundCard-dark-dark':
              pokemonType === 'dark',
            'bg-backgroundCard-dragon-default hover:bg-backgroundCard-dragon-dark':
              pokemonType === 'dragon',
            'bg-backgroundCard-electric-default hover:bg-backgroundCard-electric-dark':
              pokemonType === 'electric',
            'bg-backgroundCard-fairy-default hover:bg-backgroundCard-fairy-dark':
              pokemonType === 'fairy',
            'bg-backgroundCard-flying-default hover:bg-backgroundCard-flying-dark':
              pokemonType === 'flying',
            'bg-backgroundCard-fire-default hover:bg-backgroundCard-fire-dark':
              pokemonType === 'fire',
            'bg-backgroundCard-fighting-default hover:bg-backgroundCard-fighting-dark':
              pokemonType === 'fighting',
            'bg-backgroundCard-ghost-default hover:bg-backgroundCard-ghost-dark':
              pokemonType === 'ghost',
            'bg-backgroundCard-grass-default hover:bg-backgroundCard-grass-dark':
              pokemonType === 'grass',
            'bg-backgroundCard-ground-default hover:bg-backgroundCard-ground-dark':
              pokemonType === 'ground',
            'bg-backgroundCard-ice-default hover:bg-backgroundCard-ice-dark':
              pokemonType === 'ice',
            'bg-backgroundCard-normal-default hover:bg-backgroundCard-normal-dark':
              pokemonType === 'normal',
            'bg-backgroundCard-poison-default hover:bg-backgroundCard-poison-dark':
              pokemonType === 'poison',
            'bg-backgroundCard-psychic-default hover:bg-backgroundCard-psychic-dark':
              pokemonType === 'psychic',
            'bg-backgroundCard-rock-default hover:bg-backgroundCard-rock-dark':
              pokemonType === 'rock',
            'bg-backgroundCard-steel-default hover:bg-backgroundCard-steel-dark':
              pokemonType === 'steel',
            'bg-backgroundCard-water-default hover:bg-backgroundCard-water-dark':
              pokemonType === 'water',
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
        'flex size-12 cursor-pointer items-center justify-center rounded-full',
        {
          'bg-backgroundCard-bug-default hover:bg-backgroundCard-bug-dark':
            pokemonType === 'bug',
          'bg-backgroundCard-dark-default hover:bg-backgroundCard-dark-dark':
            pokemonType === 'dark',
          'bg-backgroundCard-dragon-default hover:bg-backgroundCard-dragon-dark':
            pokemonType === 'dragon',
          'bg-backgroundCard-electric-default hover:bg-backgroundCard-electric-dark':
            pokemonType === 'electric',
          'bg-backgroundCard-fairy-default hover:bg-backgroundCard-fairy-dark':
            pokemonType === 'fairy',
          'bg-backgroundCard-flying-default hover:bg-backgroundCard-flying-dark':
            pokemonType === 'flying',
          'bg-backgroundCard-fire-default hover:bg-backgroundCard-fire-dark':
            pokemonType === 'fire',
          'bg-backgroundCard-fighting-default hover:bg-backgroundCard-fighting-dark':
            pokemonType === 'fighting',
          'bg-backgroundCard-ghost-default hover:bg-backgroundCard-ghost-dark':
            pokemonType === 'ghost',
          'bg-backgroundCard-grass-default hover:bg-backgroundCard-grass-dark':
            pokemonType === 'grass',
          'bg-backgroundCard-ground-default hover:bg-backgroundCard-ground-dark':
            pokemonType === 'ground',
          'bg-backgroundCard-ice-default hover:bg-backgroundCard-ice-dark':
            pokemonType === 'ice',
          'bg-backgroundCard-normal-default hover:bg-backgroundCard-normal-dark':
            pokemonType === 'normal',
          'bg-backgroundCard-poison-default hover:bg-backgroundCard-poison-dark':
            pokemonType === 'poison',
          'bg-backgroundCard-psychic-default hover:bg-backgroundCard-psychic-dark':
            pokemonType === 'psychic',
          'bg-backgroundCard-rock-default hover:bg-backgroundCard-rock-dark':
            pokemonType === 'rock',
          'bg-backgroundCard-steel-default hover:bg-backgroundCard-steel-dark':
            pokemonType === 'steel',
          'bg-backgroundCard-water-default hover:bg-backgroundCard-water-dark':
            pokemonType === 'water',
        },
      )}
    >
      <div className="relative flex size-6 items-center justify-center overflow-hidden rounded-full bg-white p-1">
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
