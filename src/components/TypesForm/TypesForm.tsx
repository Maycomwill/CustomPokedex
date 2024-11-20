import { pokemonTypes } from '@/utils/pokemon-types';
import { TypeCard } from '../TypeCard/TypeCard';

export function TypesForm() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start space-y-4 text-center">
      <p className="text-xl font-semibold md:text-2xl">
        Você pode filtrar os pokemon por tipos
      </p>
      <div className="grid grid-cols-2 place-items-center justify-center gap-4 md:grid-cols-4 md:gap-x-4 lg:grid-cols-6">
        {pokemonTypes.map((type, i) => (
          <TypeCard key={i} pokemonType={type} pressable />
        ))}
      </div>
    </div>
  );
}
