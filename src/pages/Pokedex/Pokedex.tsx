import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { usePokedex } from '../../hooks/usePokedex';
import theme from '../../styles/theme';
import { PokemonDataProps } from '../../interfaces/pokemonInterfaces';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import NavButtons from '../../components/NavButtons/NavButtons';
import { DropMenu } from '../../components/DropdownMenu/DropMenu';
import useGeneration from '../../hooks/useGeneration';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Pokedex() {
  const params = useParams();
  const navigate = useNavigate();
  let generation = params.generationid;

  const { genTypeFilteredList, handleFilterGenType } = usePokedex();

  const { pokemonData, getGenerationFromUserChoice } = useGeneration();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  // console.log(genTypeFilteredList);

  let pokemonListFiltered: PokemonDataProps[] = [];

  if (genTypeFilteredList.length > 0) {
    pokemonListFiltered =
      search.length > 0
        ? genTypeFilteredList.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase()),
          )
        : [];
  } else {
    pokemonListFiltered =
      search.length > 0
        ? pokemonData.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase()),
          )
        : [];
  }

  useEffect(() => {
    setIsLoading(true);
    handleFilterGenType('', pokemonData);
    {
      generation && getGenerationFromUserChoice(generation);
    }
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [generation]);

  if (isLoading || pokemonData.length === 0) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    if (genTypeFilteredList.length == 0) {
      return (
        <div className="flex w-full flex-col items-center justify-start px-12">
          <div className="flex w-full items-center justify-between py-6">
            <span className="text-3xl">{params.generationid}ª Geração</span>
            <div>
              <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-[1fr_2fr_1fr] place-items-center">
            <div />
            <div className="flex w-full items-center justify-center">
              <form className="flex flex-col gap-1">
                <Input
                  type="text"
                  placeholder="Digite o nome do pokemon"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </form>
            </div>

            <DropMenu pokemonArray={pokemonData} />
          </div>
          {search.length > 0 ? (
            <div className="grid w-[90%] flex-1 grid-cols-1 place-items-center items-start gap-4 pt-3 md:grid-cols-2 lg:grid-cols-3">
              {pokemonListFiltered
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          ) : (
            <div className="grid w-[90%] flex-1 grid-cols-1 place-items-center items-start gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
              {pokemonData
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          )}
          <BackToTop />
          <NavButtons />
        </div>
      );
    } else {
      return (
        <div className="flex w-full flex-col items-center justify-start px-12">
          <div className="flex w-full items-center justify-between py-6">
            <span className="text-3xl">{params.generationid}ª Geração</span>
            <div>
              <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-[1fr_2fr_1fr] place-items-center">
            <div />
            <div className="flex w-full items-center justify-center">
              <form className="flex flex-col gap-1">
                <Input
                  type="text"
                  placeholder="Digite o nome do pokemon"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </form>
            </div>

            <DropMenu pokemonArray={pokemonData} />
          </div>

          {search.length > 0 ? (
            <div className="grid w-[90%] flex-1 grid-cols-1 place-items-center items-start gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
              {pokemonListFiltered
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          ) : (
            <div className="grid w-[90%] flex-1 grid-cols-1 place-items-center items-start gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
              {genTypeFilteredList
                .sort((a, b) => {
                  if (a > b) return 1;
                  if (a < b) return 0;
                  return 0;
                })
                .map((pokemon: PokemonDataProps) => {
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
          )}
          <BackToTop />
          <NavButtons />
        </div>
      );
    }
  }
}
