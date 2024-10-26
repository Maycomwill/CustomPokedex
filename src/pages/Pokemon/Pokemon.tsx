import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import UniquePokemonPage from '../../components/UniquePokemonPage/UniquePokemonPage';
import { usePokedex } from '../../hooks/usePokedex';
import theme from '../../styles/theme';
import useEvolution from '../../hooks/useEvolution';
import { useForms } from '../../hooks/useForms';

export function Pokemon() {
  const { getPokemonData, uniquePokemonData } = usePokedex();
  const { firstEvolution, secondEvolution, thirdEvolution } = useEvolution();
  const { forms } = useForms();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    getPokemonData(params.pokemonname);
    setTimeout(() => setIsLoading(false), 2000);
  }, [params]);

  if (isLoading) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <Loading color={theme.colors.primary[500]} size={'lg'} />
      </div>
    );
  } else {
    // console.log(uniquePokemonData);
    return (
      <UniquePokemonPage
        evolutions={{
          first: firstEvolution,
          second: secondEvolution,
          third: thirdEvolution,
        }}
        forms={forms}
        data={uniquePokemonData}
      />
    );
  }
}
