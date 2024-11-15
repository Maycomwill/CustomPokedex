import { BackToTop } from '@/components/BackToTop/BackToTop';
import Loading from '@/components/Loading/Loading';
import { PokemonCard } from '@/components/PokemonCard/PokemonCard';
import { Button } from '@/components/ui/button';
import useGames from '@/hooks/useGames';
import theme from '@/styles/theme';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Game() {
  const [searchParams] = useSearchParams();
  const { gameName } = useParams();
  const [activeDex, setActiveDex] = useState<number>(0);
  const { getPokedexes, dexes, isLoading } = useGames();
  useEffect(() => {
    const pokedexes = searchParams.getAll('pokedexes')[0].split(',');
    getPokedexes(pokedexes);
  }, []);

  const handleActiveDex = (dex: number) => {
    console.log('handle', dex);
    setActiveDex(dex);
  };

  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <Loading size={'lg'} />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col px-2 text-center md:px-4">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <h1 className="text-center text-2xl font-semibold">
          {gameName?.split('-').join(' ')}
        </h1>
      </div>
      <div className="mx-auto flex w-[60%] flex-col items-center justify-center space-y-2 py-4 md:w-full md:flex-row md:space-x-12 md:space-y-0">
        {dexes.length > 1 &&
          dexes.map((dex, i) => (
            <Button
              disabled={activeDex === i}
              key={i}
              onClick={() => handleActiveDex(i)}
              className="mx-auto w-full capitalize"
            >
              {dex.name.split('-').join(' ')}
            </Button>
          ))}
      </div>
      <div className="flex w-full flex-col space-y-6">
        {dexes[activeDex] && dexes.length > 0 ? (
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <span className="text-2xl font-semibold capitalize">
              {dexes[activeDex].name.split('-').join(' ')}
            </span>
            <p>
              {
                dexes[activeDex].descriptions.filter(
                  (d) => d.language.name === 'en',
                )[0].description
              }
            </p>
          </div>
        ) : null}

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dexes[activeDex] && dexes.length > 0
            ? dexes[activeDex].pokemon_entries
                .filter((item, index, self) => {
                  return (
                    index ===
                    self.findIndex((pokemon) => pokemon.id === item.id)
                  );
                })
                .map((pokemon, i) => (
                  <PokemonCard
                    key={i}
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                    primaryType={pokemon.types[0].type}
                    sprite={pokemon.sprite}
                  />
                ))
            : null}
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default Game;
