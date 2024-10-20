import { RegionCard } from '../RegionCard/RegionCard';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Text/Text';
import { pokemonRegions } from '@/utils/pokemon-regions';

export function RegionsForm() {
  const navigate = useNavigate();

  function handleNavigation(generation: string) {
    navigate(`/pokedex/${generation}`);
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-3 text-center">
      <Text size="lg">Navege pelas regiões do mundo pokemon</Text>
      <div className="grid w-full grid-cols-1 place-items-center items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        {pokemonRegions.map((region, i) => (
          <RegionCard
            key={i}
            region={{ region_name: region.region, number: region.number }}
          />
        ))}
      </div>
    </div>
  );
}
