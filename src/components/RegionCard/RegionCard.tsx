import { ButtonHTMLAttributes } from 'react';
import { Text } from '../Text/Text';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
interface RegionCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  region: {
    region_name:
      | 'kanto'
      | 'johto'
      | 'hoenn'
      | 'sinnoh'
      | 'unova'
      | 'kalos'
      | 'alola'
      | 'galar'
      | 'paldea';
    number: number;
  };
}

export function RegionCard(props: RegionCardProps) {
  const navigate = useNavigate();

  return (
    <button
      className={clsx(
        'bg-norepeat relative flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border-none bg-cover bg-[top_center] p-9 shadow-md outline-none transition-all duration-200 ease-in-out hover:brightness-75',
        {
          'bg-region-kanto': props.region.region_name === 'kanto',
          'bg-region-johto': props.region.region_name === 'johto',
          'bg-region-hoenn': props.region.region_name === 'hoenn',
          'bg-region-sinnoh': props.region.region_name === 'sinnoh',
          'bg-region-unova': props.region.region_name === 'unova',
          'bg-region-kalos': props.region.region_name === 'kalos',
          'bg-region-alola': props.region.region_name === 'alola',
          'bg-region-galar': props.region.region_name === 'galar',
          'bg-region-paldea': props.region.region_name === 'paldea',
        },
      )}
      onClick={() => navigate(`/pokedex/${props.region.number}`)}
    >
      <div className="absolute z-0 h-full w-full bg-gradient-to-r from-black/50 to-transparent" />

      <div className="z-10 flex w-full flex-col items-start justify-center py-3">
        <Text size="xxl" transform="capitalize" color="white" weight="bold">
          {props.region.region_name}
        </Text>
        <Text size="md" transform="capitalize" color="white" weight="semi-bold">
          {props.region.number}º geração
        </Text>
      </div>
    </button>
  );
}
