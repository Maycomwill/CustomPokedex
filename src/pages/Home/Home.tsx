import { FormEvent, useState } from 'react';
import { RegionsForm } from '../../components/RegionsForm/RegionsForm';
import { useNavigate } from 'react-router-dom';
import { TypesForm } from '../../components/TypesForm/TypesForm';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { Spacer } from '../../components/Spacer/Spacer';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Home() {
  const screenWidth: number = screen.width;
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
