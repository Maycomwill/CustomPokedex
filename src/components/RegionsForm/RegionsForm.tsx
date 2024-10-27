import { RegionCard } from '../RegionCard/RegionCard';
import { useNavigate } from 'react-router-dom';
import { pokemonRegions } from '@/utils/pokemon-regions';

export function RegionsForm() {
  const navigate = useNavigate();

  function handleNavigation(generation: string) {
    navigate(`/pokedex/${generation}`);
  }

  return (
    <section
      id="regions"
      className="flex h-full w-full flex-col items-center justify-center space-y-4 text-center"
    >
      <p className="text-xl font-semibold md:text-2xl">
        Navege pelas regiões do mundo pokemon
      </p>
      <div className="grid w-full grid-cols-1 place-items-center items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        {pokemonRegions.map((region, i) => (
          <RegionCard
            key={i}
            region={{ region_name: region.region, number: region.number }}
          />
        ))}
      </div>
    </section>
  );
}
