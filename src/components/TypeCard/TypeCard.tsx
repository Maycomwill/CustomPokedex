import { Text } from '../Text/Text';
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
          'flex h-16 w-48 min-w-48 max-w-48 items-center justify-evenly gap-2 rounded-full border-none px-4',
          {
            'bg-backgroundCard-bug hover:bg-backgroundCard-bug/90':
              pokemonType === 'bug',
            'bg-backgroundCard-dark hover:bg-backgroundCard-dark/90':
              pokemonType === 'dark',
            'bg-backgroundCard-dragon hover:bg-backgroundCard-dragon/90':
              pokemonType === 'dragon',
            'bg-backgroundCard-electric hover:bg-backgroundCard-electric/90':
              pokemonType === 'electric',
            'bg-backgroundCard-fairy hover:bg-backgroundCard-fairy/90':
              pokemonType === 'fairy',
            'bg-backgroundCard-flying hover:bg-backgroundCard-flying/90':
              pokemonType === 'flying',
            'bg-backgroundCard-fire hover:bg-backgroundCard-fire/90':
              pokemonType === 'fire',
            'bg-backgroundCard-fighting hover:bg-backgroundCard-fighting/90':
              pokemonType === 'fighting',
            'bg-backgroundCard-ghost hover:bg-backgroundCard-ghost/90':
              pokemonType === 'ghost',
            'bg-backgroundCard-grass hover:bg-backgroundCard-grass/90':
              pokemonType === 'grass',
            'bg-backgroundCard-ground hover:bg-backgroundCard-ground/90':
              pokemonType === 'ground',
            'bg-backgroundCard-ice hover:bg-backgroundCard-ice/90':
              pokemonType === 'ice',
            'bg-backgroundCard-normal hover:bg-backgroundCard-normal/90':
              pokemonType === 'normal',
            'bg-backgroundCard-poison hover:bg-backgroundCard-poison/90':
              pokemonType === 'poison',
            'bg-backgroundCard-psychic hover:bg-backgroundCard-psychic/90':
              pokemonType === 'psychic',
            'bg-backgroundCard-rock hover:bg-backgroundCard-rock/90':
              pokemonType === 'rock',
            'bg-backgroundCard-steel hover:bg-backgroundCard-steel/90':
              pokemonType === 'steel',
            'bg-backgroundCard-water hover:bg-backgroundCard-water/90':
              pokemonType === 'water',
          },
        )}
        onClick={() => navigate(`/type/${pokemonType}`)}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
          {poketypesComponents({
            height: pokemonType === 'steel' || pokemonType === 'rock' ? 21 : 25,
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
        <div className="typeName">
          <Text transform="capitalize" weight="bold" size="md">
            {pokemonType}
          </Text>
        </div>
      </button>
    );
  }
  return (
    <div
      className={clsx(
        'flex h-16 w-48 min-w-48 max-w-48 items-center justify-evenly gap-2 rounded-full border-none px-4',
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
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
        {poketypesComponents({
          height: 25,
          width: 25,
          pokemonType,
        })}
      </div>
      <div>
        <Text transform="capitalize" weight="bold" size="sm">
          {pokemonType}
        </Text>
      </div>
    </div>
  );
}
