import { pokemonTypes } from '@/utils/pokemon-types';
import { TypeCard } from '../TypeCard/TypeCard';

export function TypesForm() {
  return (
    <div className="mx-4 flex w-full flex-col items-center justify-center text-center">
      <p>Você pode filtrar os pokemon por tipos</p>
      <div className="mt-4 grid w-full grid-cols-2 place-items-center justify-center gap-4 md:w-[70%] md:grid-cols-4 lg:w-[80%] lg:grid-cols-6">
        {pokemonTypes.map((type, i) => (
          <TypeCard key={i} pokemonType={type} pressable />
        ))}
      </div>
    </div>
  );
}
