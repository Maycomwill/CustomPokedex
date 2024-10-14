import { FormEvent, useState } from 'react';
import { RegionsForm } from '../../components/RegionsForm/RegionsForm';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import theme from '../../styles/theme';
import { TypesForm } from '../../components/TypesForm/TypesForm';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { Spacer } from '../../components/Spacer/Spacer';
import { FileSearch } from 'phosphor-react';
import { Button } from '../../components/Button';
import TailwindcssTest from '../../components/TailwindcssTest';
import Spinner from '@/components/Spinner/Spinner';

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
    } finally {
    }
  };

  return (
    <Container>
      <div className="search-bar">
        <TailwindcssTest />
        <form action="" className="search-form" onSubmit={handleSearch}>
          {screenWidth < 500 ? (
            <>
              <input
                className="search-input"
                type="text"
                placeholder="Buscar um Pokemon"
                value={pokemonRef}
                onChange={(e) => setPokemonRef(e.target.value)}
              />
              <div className="search-button-wrapper">
                {isLoading ? (
                  <Button.Root animated size="small">
                    <Button.LeftIcon
                      icon={Spinner}
                      size={30}
                      color={theme.colors.gray[100]}
                    />
                  </Button.Root>
                ) : (
                  <Button.Root animated size="small">
                    <Button.Content text="Buscar um Pokemon" />
                  </Button.Root>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="input-wrapper">
                <div className="input-icon-wrapper">
                  <FileSearch size={32} />
                </div>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Buscar um Pokemon"
                  value={pokemonRef}
                  onChange={(e) => setPokemonRef(e.target.value)}
                />
              </div>
              <div className="search-button-wrapper">
                {!isLoading ? (
                  <Button.Root animated>
                    <Button.LeftIcon
                      icon={Spinner}
                      size={30}
                      color={theme.colors.gray[100]}
                    />
                  </Button.Root>
                ) : (
                  <Button.Root animated>
                    <Button.Content text="Buscar" />
                  </Button.Root>
                )}
              </div>
            </>
          )}
        </form>
      </div>
      <div className="filters-wrapper">
        <Spacer />
        <div className="regions-wrapper">
          <RegionsForm />
        </div>
        <Spacer />
        <div className="types-wrapper">
          <TypesForm />
        </div>
      </div>
      <BackToTop />
    </Container>
  );
}
