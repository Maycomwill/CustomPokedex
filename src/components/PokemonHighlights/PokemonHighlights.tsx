import useHighlights from '@/hooks/useHighlights';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import Spinner from '../Spinner/Spinner';

function PokemonHighlights() {
  const { highlights, isLoading } = useHighlights();
  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <section
      id="highlights"
      className="flex flex-col items-center justify-center space-y-4"
    >
      <span className="text-xl font-semibold md:text-2xl">
        Pokémon em destaque
      </span>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}

export default PokemonHighlights;
