import { pokemonTypes } from '@/utils/pokemon-types';
import { TypeCard } from '../TypeCard/TypeCard';

export function TypesForm() {
  return (
    <div className="mx-4 flex w-full flex-col items-center justify-center text-center">
      <p className='"pb-4 lg:text-3xl" text-xl md:text-2xl'>
        Você pode filtrar os pokemon por tipos
      </p>
      <div className="mt-4 grid w-[50%] grid-cols-2 place-items-center justify-center gap-4 md:w-[70%] md:grid-cols-4 md:gap-x-4 lg:w-[70%] lg:grid-cols-6 xl:w-[50%]">
        {pokemonTypes.map((type, i) => (
          <TypeCard key={i} pokemonType={type} pressable />
        ))}
      </div>
    </div>
  );
}
