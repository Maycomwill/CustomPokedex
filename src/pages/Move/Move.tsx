import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useMoves from '../../hooks/useMoves';
import Loading from '../../components/Loading/Loading';
import theme from '../../styles/theme';
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

function Move() {
  const params = useParams();
  const { getMovesData, move, isLoading, moveCommonPokemon } = useMoves();
  const navigate = useNavigate();

  useEffect(() => {
    params.moveName && getMovesData(params.moveName);
    return;
  }, [params.moveName]);

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

  if (isLoading || !move) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen flex-1 flex-col items-center justify-start px-2">
        <h1 className="text-4xl font-semibold capitalize">
          {move.name.split('-').join(' ')}
        </h1>

        <div className="text-justify">
          <p className="text-base">{move.flavor_text_entries}</p>
        </div>
        <Spacer />

        <div className="flex w-full flex-col items-start justify-center py-6 md:flex-row">
          <div className="mx-auto w-full space-y-2 text-center md:w-1/2">
            <p className="text-base">
              Efeito:{' '}
              <span className="break-words font-semibold">
                {move.effect_entries}
              </span>
            </p>
            <div className="space-y-2">
              <p
                className={clsx('block text-base', {
                  hidden: move.effect_chance === null,
                })}
              >
                Chance de aplicar o efeito:{' '}
                <span className="font-semibold">{move.effect_chance}%</span>
              </p>

              <p className="text-base capitalize">
                Alvo:{' '}
                <span className="font-semibold">
                  {move.target.name.split('-').join(' ')}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center justify-center py-4">
              <TypeCard pressable pokemonType={move.type.name} />
            </div>
          </div>
          <div className="mx-auto w-full space-y-4 pt-4 md:w-1/2 md:pt-0">
            {move.damage_class.name !== 'status' && (
              <div className="justify-center0 flex flex-col items-start px-4">
                <span className="w-full text-center text-base">Power:</span>
                <div className="relative h-6 w-full rounded-full bg-gray-600">
                  <div
                    className="absolute left-0 top-0 h-6 rounded-full bg-primary-300 px-2 font-semibold"
                    style={{
                      width: move.power > 100 ? '100%' : `${move.power}%`,
                    }}
                  >
                    <span className="text-base">{move.power}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="grid w-full grid-cols-2 place-content-start place-items-center justify-center gap-8">
              <div className="flex items-center justify-center">
                <p>
                  PP: <span className="font-semibold">{move.pp}</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p>
                  Acurácia:{' '}
                  <span className="font-semibold">
                    {move.damage_class.name !== 'status'
                      ? `${move.accuracy}%`
                      : '---'}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p>
                    Prioridade:{' '}
                    <span className="font-semibold">{move.priority}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Pode variar de -8 a 8
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span>Classe de dano: </span>
                <CustomTooltip content={move.damage_class.name}>
                  {handleDamageClass(move.damage_class.name)}
                </CustomTooltip>
              </div>
            </div>
          </div>
        </div>
        <Spacer />
        <div className="w-full space-y-2 text-center">
          <span className="text-xl font-semibold md:text-2xl">
            Pokémon que podem aprender essa técnica
          </span>
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
export default Move;
