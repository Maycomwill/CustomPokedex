interface RegionProps {
  region:
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
}
export const pokemonRegions: RegionProps[] = [
  {
    region: 'kanto',
    number: 1,
  },
  {
    region: 'johto',
    number: 2,
  },
  {
    region: 'hoenn',
    number: 3,
  },
  {
    region: 'sinnoh',
    number: 4,
  },
  {
    region: 'unova',
    number: 5,
  },
  {
    region: 'kalos',
    number: 6,
  },
  {
    region: 'alola',
    number: 7,
  },
  {
    region: 'galar',
    number: 8,
  },
  {
    region: 'paldea',
    number: 9,
  },
];
