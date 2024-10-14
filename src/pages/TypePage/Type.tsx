import { useEffect, useState } from 'react';
import { Container } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import theme from '../../styles/theme';
import useTypes from '../../hooks/useTypes';
import { Spacer } from '../../components/Spacer/Spacer';
import MoveCard from '../../components/MoveCard';

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
    return <Loading color={theme.colors.primary[500]} size={'lg'} />;
  } else {
    // console.log(moves);
    return (
      <Container>
        <div className="pokemon-wrapper">
          <div className="pageTitle">
            <Text size="lg">
              Pokémon do tipo:{' '}
              <Text
                transform="uppercase"
                color="primary"
                size="lg"
                weight="bold"
              >
                {params.typename}
              </Text>
            </Text>
            <div>
              <Button.Root
                backgroundColor="delete"
                onClick={() => navigate(-1)}
              >
                <Button.Content text={'Voltar'} />
              </Button.Root>
            </div>
          </div>
          <div className="pokemonCard-wrapper">
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
        <Spacer />
        <div className="moves-wrapper">
          <Text size="lg">
            Técnicas do tipo:{' '}
            <Text transform="uppercase" color="primary" size="lg" weight="bold">
              {params.typename}
            </Text>
          </Text>
          <div className="moves-card-wrapper">
            {moves.map((move) => {
              return <MoveCard move={move} key={move.url} />;
            })}
          </div>
        </div>
        <div className="backButton">
          <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
            <Button.Content text={'Voltar'} />
          </Button.Root>
        </div>
        <BackToTop />
      </Container>
    );
  }
}
