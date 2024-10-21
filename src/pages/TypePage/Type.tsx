import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

import { BackToTop } from '../../components/BackToTop/BackToTop';
import theme from '../../styles/theme';
import useTypes from '../../hooks/useTypes';
import { Spacer } from '../../components/Spacer/Spacer';
import MoveCard from '../../components/MoveCard/MoveCard';
import { Button } from '@/components/ui/button';

export function Type() {
  const params = useParams();
  const { getTypeData, commonTypesPokemon, moves } = useTypes();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    {
      params.typename && getTypeData(params.typename);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    // console.log(moves);
    return (
      <div className="h-full min-h-screen w-full px-4">
        <div className="flex flex-col space-y-2 py-4">
          <div className="flex w-full flex-col items-center text-center md:flex-row md:justify-between">
            <p className="text-3xl">
              Pokémon do tipo:{' '}
              <span className="text-2xl font-semibold uppercase text-primary-500">
                {params.typename}
              </span>
            </p>
            <div className="flex w-[50%] items-center justify-center pt-2 md:justify-end">
              <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
          </div>
          <div className="m-auto grid w-full grid-cols-1 place-items-center justify-center gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
            {commonTypesPokemon.map((pokemon) => {
              return (
                <PokemonCard
                  key={`${pokemon.id}-${pokemon.name}`}
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  sprite={pokemon.sprite}
                  primaryType={pokemon.types[0].type}
                />
              );
            })}
          </div>
        </div>
        {/* <Spacer />
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <p className="text-xl">
            Técnicas do tipo:{' '}
            <span className="text-xl font-semibold uppercase text-primary-500">
              {params.typename}
            </span>
          </p>
          <div className="grid grid-cols-2 place-items-center gap-2 py-6 md:grid-cols-4 lg:grid-cols-6">
            {moves.map((move, i) => {
              return <MoveCard move={move} key={i} />;
            })}
          </div>
        </div> */}
        <div className="flex w-full items-center justify-center">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </div>
        <BackToTop />
      </div>
    );
  }
}
