import bug from '../../assets/TypesSvg/bug.svg';
import dark from '../../assets/TypesSvg/dark.svg';
import dragon from '../../assets/TypesSvg/dragon.svg';
import electric from '../../assets/TypesSvg/electric.svg';
import fairy from '../../assets/TypesSvg/fairy.svg';
import flying from '../../assets/TypesSvg/flying.svg';
import fire from '../../assets/TypesSvg/fire.svg';
import fighting from '../../assets/TypesSvg/fighting.svg';
import ghost from '../../assets/TypesSvg/ghost.svg';
import grass from '../../assets/TypesSvg/grass.svg';
import ground from '../../assets/TypesSvg/ground.svg';
import ice from '../../assets/TypesSvg/ice.svg';
import normal from '../../assets/TypesSvg/normal.svg';
import poison from '../../assets/TypesSvg/poison.svg';
import psychic from '../../assets/TypesSvg/psychic.svg';
import rock from '../../assets/TypesSvg/rock.svg';
import steel from '../../assets/TypesSvg/steel.svg';
import water from '../../assets/TypesSvg/water.svg';
import { useNavigate } from 'react-router-dom';
import { poketypesComponents } from '../pokemonTypes/objects/objects';
import clsx from 'clsx';

interface ITypeCardProps {
  pokemonType: string;
  pressable?: boolean;
}

export function TypeCard({ pokemonType, pressable = false }: ITypeCardProps) {
  const navigate = useNavigate();
  const pokemonTypesObject = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    flying: flying,
    fire: fire,
    fighting: fighting,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water,
  } as any;

  function pokemonTypeImageName(typeName: string) {
    return pokemonTypesObject[typeName];
  }

  if (pressable === true) {
    return (
      <button
        className={clsx(
          'flex h-10 w-28 max-w-32 items-center justify-start gap-2 rounded-full border-none pl-1',
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
        onClick={() => navigate(`/type/${pokemonType}`)}
      >
        <div className="flex size-8 items-center justify-center rounded-full bg-white">
          {poketypesComponents({
            height:
              pokemonType === 'dragon'
                ? 28
                : pokemonType === 'rock' || pokemonType === 'green'
                  ? 22
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
        <div className="w-1/2">
          <span className="text-left font-semibold capitalize">
            {pokemonType}
          </span>
        </div>
      </button>
    );
  }
  return (
    <div
      className={clsx(
        'flex h-10 w-28 max-w-32 items-center justify-start gap-2 rounded-full border-none pl-1',
        {
          'bg-backgroundCard-bug-default': pokemonType === 'bug',
          'bg-backgroundCard-dark-default': pokemonType === 'dark',
          'bg-backgroundCard-dragon-default': pokemonType === 'dragon',
          'bg-backgroundCard-electric-default': pokemonType === 'electric',
          'bg-backgroundCard-fairy-default': pokemonType === 'fairy',
          'bg-backgroundCard-flying-default': pokemonType === 'flying',
          'bg-backgroundCard-fire-default': pokemonType === 'fire',
          'bg-backgroundCard-fighting-default': pokemonType === 'fighting',
          'bg-backgroundCard-ghost-default': pokemonType === 'ghost',
          'bg-backgroundCard-grass-default': pokemonType === 'grass',
          'bg-backgroundCard-ground-default': pokemonType === 'ground',
          'bg-backgroundCard-ice-default': pokemonType === 'ice',
          'bg-backgroundCard-normal-default': pokemonType === 'normal',
          'bg-backgroundCard-poison-default': pokemonType === 'poison',
          'bg-backgroundCard-psychic-default': pokemonType === 'psychic',
          'bg-backgroundCard-rock-default': pokemonType === 'rock',
          'bg-backgroundCard-steel-default': pokemonType === 'steel',
          'bg-backgroundCard-water-default': pokemonType === 'water',
        },
      )}
    >
      <div className="flex size-8 items-center justify-center rounded-full bg-white">
        {poketypesComponents({
          height:
            pokemonType === 'dragon'
              ? 28
              : pokemonType === 'rock' || pokemonType === 'green'
                ? 22
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
      <div className="w-1/2">
        <span className="text-left font-semibold capitalize">
          {pokemonType}
        </span>
      </div>
    </div>
  );
}
