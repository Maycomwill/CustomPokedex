import { ArrowFatLinesUp } from 'phosphor-react';
import { Evolution } from '../../interfaces/evolutionInterface';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import { IoMdHappy } from 'react-icons/io';
import { IoSparkles, IoFemale } from 'react-icons/io5';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

interface EvolutionCardProps {
  shiny: boolean;
  evolution: Evolution;
}

function EvolutionCard({ shiny, evolution }: EvolutionCardProps) {
  const navigate = useNavigate();
  function handleTrigger(trigger: { name: string }) {
    //options: "level-up" | "trade" | "use-item" | "shed" | "other"
    if (trigger === null) {
      return (
        <div className="flex min-h-12 w-full flex-1 items-center justify-center">
          <div className="flex items-center justify-center"></div>
        </div>
      );
    }
    switch (trigger.name) {
      case 'use-item':
        if (evolution.name === 'glaceon' || evolution.name === 'leafeon') {
          return (
            <div className="flex min-h-12 w-full flex-1 items-center justify-center">
              <CustomTooltip
                content={evolution.details![3].item!.name.split('-').join(' ')}
              >
                <img
                  src={evolution.trigger!.sprite}
                  alt={evolution.details![3].item?.name}
                />
              </CustomTooltip>
            </div>
          );
        }
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center space-x-2">
            <CustomTooltip
              content={evolution.details![0].item!.name.split('-').join(' ')}
            >
              <img
                src={evolution.trigger!.sprite}
                alt={evolution.details![0].item?.name}
              />
            </CustomTooltip>
          </div>
        );

      case 'level-up':
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center">
            <div className="flex items-center justify-center space-x-2">
              {evolution.details![0].min_level && (
                <CustomTooltip content="Level">
                  <>
                    <ArrowFatLinesUp color="white" size={16} />
                    <span>{evolution.details![0].min_level}</span>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_beauty && (
                <CustomTooltip content="Level">
                  <>
                    <IoSparkles size={16} color="yellow" />
                    <span>{evolution.details![0].min_beauty}</span>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_happiness && (
                <CustomTooltip content="Felicidade">
                  <div className="flex items-center justify-center space-x-2">
                    <IoMdHappy color="white" size={16} />
                    <span>{evolution.details![0].min_happiness}</span>
                    {evolution.details![0].time_of_day === 'day' ? (
                      <FaSun size={14} color="yellow" />
                    ) : (
                      <FaMoon size={14} color="white" />
                    )}
                  </div>
                </CustomTooltip>
              )}
              {evolution.details![0].min_affection && (
                <CustomTooltip content="Afeição">
                  <div className="flex items-center justify-center space-x-2">
                    <FaHeart size={16} color="red" />
                    <span>{evolution.details![0].min_affection}</span>
                  </div>
                </CustomTooltip>
              )}
              {evolution.details![0].gender === 1 && (
                <div className="flex min-h-12 w-full flex-1 items-center justify-center">
                  <CustomTooltip content="Gênero">
                    <div className="flex items-center justify-center space-x-2">
                      <IoFemale size={16} color="red" />
                      <span>{evolution.details![0].min_affection}</span>
                    </div>
                  </CustomTooltip>
                </div>
              )}
            </div>
          </div>
        );
      case 'trade':
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center">
            <CustomTooltip content="Troca">
              <div className="flex items-center justify-center">
                <CgArrowsExchangeAltV color="white" size={20} />
              </div>
            </CustomTooltip>
          </div>
        );
      case null:
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center" />
        );
      default:
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center" />
        );
    }
  }

  function handleRedirect(name: string) {
    return navigate(`/pokemon/${name}`);
  }

  // console.log(evolution.name, evolution);
  return (
    <button
      className="flex min-h-40 flex-col items-center justify-between rounded-md border border-accent-200 bg-white/0 py-2 outline-none transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-accent-500 hover:bg-white/10"
      onClick={() => handleRedirect(evolution.name)}
    >
      <div className="flex min-h-12 w-full items-center justify-center">
        {evolution.trigger && handleTrigger(evolution.trigger)}
      </div>
      <div className="flex h-20 w-32 items-center justify-center">
        <img
          className="max-h-20"
          src={
            shiny ? evolution.sprites.gif.shiny : evolution.sprites.gif.default
          }
          alt={evolution.name}
        />
      </div>
      <span className="capitalize">{evolution.name}</span>
    </button>
  );
}

//(<div>{handleTrigger(evolution.details[0].trigger.name)}</div>)

export default EvolutionCard;
