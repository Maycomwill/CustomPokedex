import { FormEvent, useState } from 'react';
import { RegionsForm } from '../../components/RegionsForm/RegionsForm';
import { useNavigate } from 'react-router-dom';
import { TypesForm } from '../../components/TypesForm/TypesForm';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { Spacer } from '../../components/Spacer/Spacer';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useHighlights from '@/hooks/useHighlights';
import { PokemonCard } from '@/components/PokemonCard/PokemonCard';

export function Home() {
  const screenWidth: number = screen.width;
  const { highlights } = useHighlights();
  const [pokemonRef, setPokemonRef] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    setIsLoading(true);
    try {
      if (pokemonRef !== '') {
        e.preventDefault();
        setTimeout(() => {
          navigate(`/pokemon/${pokemonRef}`);
        }, 1000);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert('Digite o nome ou id de um pokemon para pesquisar');
        window.location.reload;
      }
    } catch (error) {
      console.log('Erro ao escolher opção');
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <div className="flex w-full items-center justify-center">
        <form
          className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
          onSubmit={handleSearch}
        >
          <div className="w-[50%]">
            <Input
              type="text"
              value={pokemonRef}
              onChange={(e) => setPokemonRef(e.target.value)}
              placeholder="Buscar um Pokémon"
            />
          </div>
          <div>
            <Button size={'lg'}>Buscar</Button>
          </div>
        </form>
      </div>
      <div className="flex w-full flex-col px-12">
        <Spacer />
        {highlights.length > 0 && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="text-2xl font-semibold md:text-4xl">
              Pokémon em destaque
            </span>
            <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:w-[90%]">
              {highlights.map((pokemon, i) => (
                <PokemonCard
                  pressable
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  primaryType={pokemon.types[0].type}
                  sprite={pokemon.sprite}
                  key={pokemon.id}
                />
              ))}
            </div>
          </div>
        )}
        <div className="w-full">
          <RegionsForm />
        </div>
        <Spacer />
        <div className="w-full">
          <TypesForm />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
