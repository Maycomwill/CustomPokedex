import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useMoves from '../../hooks/useMoves';
import Loading from '../../components/Loading/Loading';
import theme from '../../styles/theme';
import { Text } from '../../components/Text/Text';
import { Spacer } from '../../components/Spacer/Spacer';
import CustomTooltip from '../../components/CustomTooltip/CustomTooltip';
import Physical from '../../assets/damage_class/physical.png';
import Special from '../../assets/damage_class/special.png';
import Status from '../../assets/damage_class/status.png';
import { TypeCard } from '../../components/TypeCard/TypeCard';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { BackToTop } from '../../components/BackToTop/BackToTop';

import clsx from 'clsx';
import { Button } from '@/components/ui/button';

function Moves() {
  const params = useParams();
  const { getMovesData, move, isLoading, moveCommonPokemon } = useMoves();
  const navigate = useNavigate();
  let moveName = params.moveName;

  useEffect(() => {
    {
      moveName && getMovesData(moveName);
    }
  }, []);

  function handleDamageClass(damage_class: 'physical' | 'special' | 'status') {
    switch (damage_class) {
      case 'physical':
        return (
          <div className="damage_class_wrapper">
            <img src={Physical} alt="Status type" />
          </div>
        );
      case 'special':
        return (
          <div className="damage_class_wrapper">
            <img src={Special} alt="Status type" />
          </div>
        );
      default:
        return (
          <div>
            <img src={Status} alt="Status type" />
          </div>
        );
    }
  }

  if (isLoading || move === undefined) {
    return <Loading color={theme.colors.primary[500]} size={'lg'} />;
  } else {
    return (
      <div className="flex min-h-screen flex-1 flex-col items-center justify-start px-2">
        <Text size="xl" weight="bold" transform="capitalize">
          {move.name.split('-').join(' ')}
        </Text>
        <div className="text-justify">
          <Text size="md">{move.flavor_text_entries}</Text>
        </div>
        <Spacer />

        <div className="flex w-full flex-col items-center justify-center py-6 md:flex-row">
          <div className="space-y-2 text-justify">
            <Text>Efeito: {move.effect_entries}</Text>
            <div className="space-y-2">
              <Text
                style={{
                  display: move.effect_chance === null ? 'none' : 'block',
                }}
              >
                Chance: {move.effect_chance}%
              </Text>
              <Text transform="capitalize">
                Alvo: {move.target.name.split('-').join(' ')}
              </Text>
            </div>
            <div className="flex w-full items-center justify-center py-4">
              <TypeCard pressable pokemonType={move.type.name} />
            </div>
          </div>
          <div className="w-full space-y-12 pt-4">
            {move.damage_class.name !== 'status' && (
              <div className="flex flex-col items-start justify-center">
                <Text>Power:</Text>
                <div className="relative h-6 w-full rounded-md bg-gray-600">
                  <div
                    className="absolute left-0 top-0 h-6 rounded-md bg-primary-300"
                    style={{ width: `${move.power}%` }}
                  >
                    <Text size="md">{move.power}</Text>
                  </div>
                </div>
              </div>
            )}
            <div className="grid w-full grid-cols-2 place-content-start place-items-center justify-center gap-8">
              <div className="flex items-center justify-center">
                <Text>PP: {move.pp}</Text>
              </div>
              <div className="flex items-center justify-center">
                <Text>
                  Acurácia:{' '}
                  {move.damage_class.name !== 'status'
                    ? `${move.accuracy}%`
                    : '---'}
                </Text>
              </div>
              <div className="flex items-center justify-center">
                <CustomTooltip arrow title={'Varia de -8 a 8'}>
                  <Text>Prioridade: {move.priority}</Text>
                </CustomTooltip>
              </div>
              <div className="flex flex-col space-y-1">
                <Text>Classe de dano: </Text>
                <CustomTooltip arrow title={move.damage_class.name}>
                  {handleDamageClass(move.damage_class.name)}
                </CustomTooltip>
              </div>
            </div>
          </div>
        </div>
        <Spacer />
        <div className="w-full space-y-2 text-center">
          <Text>Pokémon que podem aprender essa técnica</Text>
          <div className="grid w-full grid-cols-1 place-items-center items-center gap-4 pt-3 md:grid-cols-2 lg:grid-cols-3">
            {moveCommonPokemon.length !== 0 ? (
              moveCommonPokemon.map((pokemon, i) => {
                return (
                  <div
                    key={`${pokemon.id}-${pokemon.name}`}
                    className={clsx('w-full', {
                      'md:col-span-2 md:w-auto lg:col-span-1':
                        i === moveCommonPokemon.length - 1,
                    })}
                  >
                    <PokemonCard
                      id={pokemon.id}
                      name={pokemon.name}
                      primaryType={pokemon.types[0].type}
                      sprite={pokemon.sprite}
                      types={pokemon.types}
                      pressable
                    />
                  </div>
                );
              })
            ) : (
              <Loading color={theme.colors.primary[500]} size={'lg'} />
            )}
          </div>
        </div>
        <div className="py-4">
          <Button size={'lg'} onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </div>
        <BackToTop />
      </div>
    );
  }
}

export default Moves;
