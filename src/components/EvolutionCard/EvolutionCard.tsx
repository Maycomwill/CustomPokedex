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
          <div className="flex items-center justify-center gap-1"></div>
        </div>
      );
    }
    switch (trigger.name) {
      case 'use-item':
        if (evolution.name === 'glaceon' || evolution.name === 'leafeon') {
          return (
            <div className="flex min-h-12 w-full flex-1 items-center justify-center">
              <CustomTooltip
                arrow
                placement="top"
                title={evolution.details![3].item?.name.split('-').join(' ')}
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
          <div className="flex min-h-12 w-full flex-1 items-center justify-center">
            <CustomTooltip
              placement="top"
              arrow
              title={evolution.details![0].item?.name.split('-').join(' ')}
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
            <div className="flex items-center justify-center gap-1">
              {evolution.details![0].min_level && (
                <CustomTooltip arrow title={'Level'} placement="top">
                  <>
                    <ArrowFatLinesUp color="white" size={16} />
                    <span>{evolution.details![0].min_level}</span>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_beauty && (
                <CustomTooltip arrow title={'Level'} placement="top">
                  <>
                    <IoSparkles size={16} color="yellow" />
                    <span>{evolution.details![0].min_beauty}</span>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_happiness && (
                <CustomTooltip
                  placement="top"
                  arrow
                  title={'Felicidade'}
                  style={{
                    backgroundColor: 'red',
                  }}
                >
                  <div className="flex items-center justify-center gap-1">
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
                <CustomTooltip arrow title={'Afeição'} placement="top">
                  <div className="flex items-center justify-center gap-1">
                    <FaHeart size={16} color="red" />
                    <span>{evolution.details![0].min_affection}</span>
                  </div>
                </CustomTooltip>
              )}
              {evolution.details![0].gender === 1 && (
                <CustomTooltip arrow title={'Gênero'} placement="top">
                  <div className="flex items-center justify-center gap-1">
                    <IoFemale size={16} color="red" />
                    <span>{evolution.details![0].min_affection}</span>
                  </div>
                </CustomTooltip>
              )}
            </div>
          </div>
        );
      case 'trade':
        return (
          <div className="flex min-h-12 w-full flex-1 items-center justify-center">
            <CustomTooltip arrow title="Troca" placement="top">
              <div className="flex items-center justify-center gap-1">
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
      className="flex min-h-72 flex-col items-center justify-between rounded-md border border-accent-200 bg-white/0 px-2 py-1 outline-none transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-accent-500 hover:bg-white/10"
      onClick={() => handleRedirect(evolution.name)}
    >
      <div className="min-h-12 w-full">
        {evolution.trigger && handleTrigger(evolution.trigger)}
      </div>
      <div className="flex">
        <img
          className="size-40 md:size-52 lg:size-64"
          src={shiny ? evolution.sprites.shiny : evolution.sprites.default}
          alt={evolution.name}
        />
      </div>
      <span className="capitalize">{evolution.name}</span>
    </button>
  );
}

//(<div>{handleTrigger(evolution.details[0].trigger.name)}</div>)

export default EvolutionCard;
