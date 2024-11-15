import clsx from 'clsx';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { Link } from 'react-router-dom';

interface GenerationGamesCardProps {
  generation?: number;
  games: { picture: string; name: string; pokedex: string[] }[];
  remakes?: { picture: string; name: string; pokedex: string[] }[];
}

function GenerationGamesCard({
  games,
  generation,
  remakes,
}: GenerationGamesCardProps) {
  return (
    <fieldset className="relative w-full rounded-lg border-2 border-primary-500 p-8">
      <legend className="px-4 text-center font-semibold uppercase">
        {generation ? `${generation}ª geração` : 'National Pokedéx'}
      </legend>
      <div
        className={clsx({
          'flex items-center justify-center space-x-4': games.length <= 3,
          'grid grid-cols-3 place-content-center place-items-center items-center gap-4':
            games.length >= 4,
        })}
      >
        {games.map((game, i) => {
          return (
            <Link
              key={i}
              to={`/games/${game.name.split(' ').join('-')}?pokedexes=${game.pokedex.map((pokedex) => encodeURIComponent(pokedex))}`}
            >
              <CustomTooltip content={game.name}>
                <img
                  className={clsx(
                    'duration-250 size-24 rounded-lg object-fill object-center ring-accent-500 transition-transform ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-4 md:size-32',
                    {
                      'last:col-span-3':
                        games.length >= 4 && games.length % 3 !== 0,
                    },
                  )}
                  src={game.picture}
                  alt="GameCard"
                />
              </CustomTooltip>
            </Link>
          );
        })}
      </div>
      {remakes && (
        <div className="w-full text-center">
          <div className="flex items-center justify-center space-x-4 pt-4">
            {remakes.map((game, i) => {
              return (
                <Link
                  key={i}
                  to={`/games/${game.name.split(' ').join('-')}?pokedexes=${game.pokedex.map((pokedex) => encodeURIComponent(pokedex))}`}
                >
                  <CustomTooltip content={game.name}>
                    <img
                      className="duration-250 size-24 rounded-lg ring-accent-500 transition-transform ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-4 md:size-32"
                      src={game.picture}
                      alt="GameCard"
                    />
                  </CustomTooltip>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </fieldset>
  );
}

export default GenerationGamesCard;
