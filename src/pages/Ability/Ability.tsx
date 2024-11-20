import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import theme from '../../styles/theme';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import useAbility from '../../hooks/useAbility';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

export function Ability() {
  const params = useParams();
  const navigate = useNavigate();
  let abilityName = params.abilityname;

  const { getAbilityInfo, abilityInfo, isLoading, commonAbilityPokemon } =
    useAbility();

  useEffect(() => {
    {
      abilityName && getAbilityInfo(abilityName);
    }
  }, []);

  if (abilityInfo === undefined || isLoading === true) {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-start px-1 pt-px">
        <>
          <div className="text-center">
            <h1 className="text-4xl font-semibold uppercase text-primary-500">
              {abilityInfo.name.split('-').join(' ')}
            </h1>
          </div>
          <div className="px-3 pt-6 text-justify">
            <span>{abilityInfo.description}</span>
          </div>
          <div className="py-4 text-center">
            <span className="text-3xl">
              Pokemons que possuem esta habilidade:{' '}
            </span>
          </div>

          <div className="grid w-full grid-cols-1 place-items-center items-center gap-4 px-2 pt-3 md:grid-cols-2 lg:grid-cols-3">
            {commonAbilityPokemon !== undefined ? (
              commonAbilityPokemon.map((pokemon, i) => {
                return (
                  <div
                    key={`${pokemon.id}-${pokemon.name}`}
                    className={clsx('w-full', {
                      'col-span-1 md:col-span-2 md:w-auto lg:col-span-1 lg:w-full':
                        i === commonAbilityPokemon.length - 1,
                    })}
                  >
                    <PokemonCard
                      id={pokemon.id}
                      name={pokemon.name}
                      types={pokemon.types}
                      sprite={pokemon.sprite}
                      primaryType={pokemon.types[0].type}
                    />
                  </div>
                );
              })
            ) : (
              <Loading color={theme.colors.primary[500]} size={'lg'} />
            )}
          </div>
          <div className="py-4">
            <Button size={'lg'} onClick={() => navigate(-1)}>
              Voltar
            </Button>
          </div>
        </>
        <BackToTop />
      </div>
    );
  }
}
