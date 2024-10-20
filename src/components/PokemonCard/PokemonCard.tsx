import { typeProps } from '../../interfaces/pokemonInterfaces';
import { Text } from '../Text/Text';
import { TypeCard } from '../TypeCard/TypeCard';
import { useNavigate } from 'react-router-dom';
import { pokemonTypesObject } from '../pokemonTypes/objects/objects';
import clsx from 'clsx';

interface PokemonProps {
  name: string;
  id: number;
  sprite: string;
  types: typeProps[];
  primaryType: string;
  pressable?: boolean;
}

export function PokemonCard({
  name,
  id,
  types,
  sprite,
  primaryType,
  pressable = false,
}: PokemonProps) {
  function addZeroes(num: string, len: number) {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;

    while (counter < len) {
      numberWithZeroes = '0' + numberWithZeroes;

      counter++;
    }

    return numberWithZeroes;
  }

  const navigate = useNavigate();

  return (
    // background-color: ${({ color }) => tint(0.85, backgroundColorType(color))};
    // :hover {
    //   background-color: ${({ color }) => tint(0.5, backgroundColorType(color))};
    // }
    <div
      className={clsx(
        'justify-cennter ease-custom-bezier flex h-48 min-h-52 w-full cursor-pointer flex-row items-center overflow-hidden rounded-xl border-none outline-none transition-all duration-300',
        {
          'bg-backgroundCard-bug-light hover:bg-backgroundCard-bug-mediumLight':
            types[0].type === 'bug',
          'bg-backgroundCard-dark-light hover:bg-backgroundCard-dark-mediumLight':
            types[0].type === 'dark',
          'bg-backgroundCard-dragon-light hover:bg-backgroundCard-dragon-mediumLight':
            types[0].type === 'dragon',
          'bg-backgroundCard-electric-light hover:bg-backgroundCard-electric-mediumLight':
            types[0].type === 'electric',
          'bg-backgroundCard-fairy-light hover:bg-backgroundCard-fairy-mediumLight':
            types[0].type === 'fairy',
          'bg-backgroundCard-flying-light hover:bg-backgroundCard-flying-mediumLight':
            types[0].type === 'flying',
          'bg-backgroundCard-fire-light hover:bg-backgroundCard-fire-mediumLight':
            types[0].type === 'fire',
          'bg-backgroundCard-fighting-light hover:bg-backgroundCard-fighting-mediumLight':
            types[0].type === 'fighting',
          'bg-backgroundCard-ghost-light hover:bg-backgroundCard-ghost-mediumLight':
            types[0].type === 'ghost',
          'bg-backgroundCard-grass-light hover:bg-backgroundCard-grass-mediumLight':
            types[0].type === 'grass',
          'bg-backgroundCard-ground-light hover:bg-backgroundCard-ground-mediumLight':
            types[0].type === 'ground',
          'bg-backgroundCard-ice-light hover:bg-backgroundCard-ice-mediumLight':
            types[0].type === 'ice',
          'bg-backgroundCard-normal-light hover:bg-backgroundCard-normal-mediumLight':
            types[0].type === 'normal',
          'bg-backgroundCard-poison-light hover:bg-backgroundCard-poison-mediumLight':
            types[0].type === 'poison',
          'bg-backgroundCard-psychic-light hover:bg-backgroundCard-psychic-mediumLight':
            types[0].type === 'psychic',
          'bg-backgroundCard-rock-light hover:bg-backgroundCard-rock-mediumLight':
            types[0].type === 'rock',
          'bg-backgroundCard-steel-light hover:bg-backgroundCard-steel-mediumLight':
            types[0].type === 'steel',
          'bg-backgroundCard-water-light hover:bg-backgroundCard-water-mediumLight':
            types[0].type === 'water',
        },
      )}
      onClick={() => {
        navigate(`/pokemon/${name}`);
      }}
      color={primaryType}
    >
      <div className="flex h-48 min-h-52 flex-1 flex-col items-start justify-between px-6 py-2">
        <div className="flex flex-col items-start justify-center gap-1 md:justify-start md:gap-2">
          <Text
            size="lg"
            weight="bold"
            transform="capitalize"
            color="gray"
            id="pokemonName"
          >
            {name.split('-').join(' ')}
          </Text>
          <Text weight="semi-bold" color="gray">
            #{addZeroes(String(id), 3)}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 pb-2">
          <ul className="flex list-none items-center justify-center gap-2">
            {types.map((type) => {
              return (
                <li key={`${type.type}`}>
                  <TypeCard pressable={false} pokemonType={type.type} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={clsx(
          'relative z-10 flex h-48 min-h-52 w-44 items-center justify-center rounded-xl',

          {
            'bg-backgroundCard-bug-default': types[0].type === 'bug',
            'bg-backgroundCard-dark-default': types[0].type === 'dark',
            'bg-backgroundCard-dragon-default': types[0].type === 'dragon',
            'bg-backgroundCard-electric-default': types[0].type === 'electric',
            'bg-backgroundCard-fairy-default': types[0].type === 'fairy',
            'bg-backgroundCard-flying-default': types[0].type === 'flying',
            'bg-backgroundCard-fire-default': types[0].type === 'fire',
            'bg-backgroundCard-fighting-default': types[0].type === 'fighting',
            'bg-backgroundCard-ghost-default': types[0].type === 'ghost',
            'bg-backgroundCard-grass-default': types[0].type === 'grass',
            'bg-backgroundCard-ground-default': types[0].type === 'ground',
            'bg-backgroundCard-ice-default': types[0].type === 'ice',
            'bg-backgroundCard-normal-default': types[0].type === 'normal',
            'bg-backgroundCard-poison-default': types[0].type === 'poison',
            'bg-backgroundCard-psychic-default': types[0].type === 'psychic',
            'bg-backgroundCard-rock-default': types[0].type === 'rock',
            'bg-backgroundCard-steel-default': types[0].type === 'steel',
            'bg-backgroundCard-water-default': types[0].type === 'water',
          },
        )}
      >
        <div className="spriteDiv">
          <img
            className="absolute z-0 h-32 object-cover opacity-25"
            src={pokemonTypesObject[primaryType]}
            alt={`${primaryType}-type-svg`}
          />
          <img
            className="relative z-10 h-32"
            src={sprite}
            alt={`${name} sprite`}
          />
        </div>
      </div>
    </div>
  );
}
