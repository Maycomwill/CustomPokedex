import clsx from 'clsx';
import CustomTooltip from '../CustomTooltip/CustomTooltip';

interface GenerationGamesCardProps {
  generation: number;
  games: { picture: string; name: string }[];
  remakes?: { picture: string; name: string }[];
  pokedexLinks: string[];
}

function GenerationGamesCard({
  games,
  generation,
  pokedexLinks,
  remakes,
}: GenerationGamesCardProps) {
  return (
    <div className="relative w-full rounded-lg border border-primary-500 p-8">
      <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-slate-950 px-2 uppercase">
        {generation}ª geração
      </span>
      <div
        className={clsx({
          'flex items-center justify-center space-x-4': games.length <= 3,
          'grid grid-cols-3 place-content-center place-items-center items-center gap-4':
            games.length >= 4,
        })}
      >
        {games.map((game, i) => {
          return (
            <CustomTooltip content={game.name} key={i}>
              <img
                className={clsx(
                  'duration-250 size-32 rounded-lg ring-accent-500 transition-transform ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-2',
                  {
                    'mt-2 last:col-span-3':
                      games.length >= 4 && games.length % 3 !== 0,
                  },
                )}
                src={game.picture}
                alt="GameCard"
              />
            </CustomTooltip>
          );
        })}
      </div>
      {remakes && (
        <div className="w-full pt-2 text-center">
          <div className="flex items-center justify-center space-x-4 pt-4">
            {remakes.map((game, i) => {
              return (
                <CustomTooltip content={game.name} key={i}>
                  <img
                    className="duration-250 size-32 rounded-lg ring-accent-500 transition-transform ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-2"
                    src={game.picture}
                    alt="GameCard"
                  />
                </CustomTooltip>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GenerationGamesCard;
