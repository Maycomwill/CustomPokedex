import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '../../components/Text/Text';
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
      <div className="flex w-full flex-1 items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-1 pt-px">
        <>
          <div className="text-center">
            <Text
              transform="uppercase"
              size="xxl"
              color="primary"
              weight="bold"
            >
              {abilityInfo.name.split('-').join(' ')}
            </Text>
          </div>
          <div className="px-3 pt-6 text-justify">
            <Text size="md">{abilityInfo.description}</Text>
          </div>
          <div className="py-4 text-center">
            <Text size="lg">Pokemons que possuem esta habilidade: </Text>
          </div>

          <div className="grid w-full grid-cols-1 place-items-center items-center gap-4 px-2 pt-3 md:grid-cols-2 lg:grid-cols-3">
            {commonAbilityPokemon !== undefined ? (
              commonAbilityPokemon.map((pokemon, i) => {
                return (
                  <div
                    className={clsx('w-full', {
                      'md:col-span-2 md:w-auto lg:col-span-1':
                        i === commonAbilityPokemon.length - 1,
                    })}
                  >
                    <PokemonCard
                      key={`${pokemon.id}-${pokemon.name}`}
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
