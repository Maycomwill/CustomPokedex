import { ArrowFatLinesUp } from "phosphor-react";
import { Evolution } from "../../interfaces/evolutionInterface";
import { Text } from "../Text/Text";
import { Container, Trigger } from "./styles";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { IoSparkles, IoFemale } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

interface EvolutionCardProps {
  shiny: boolean;
  evolution: Evolution;
}

function EvolutionCard({ shiny, evolution }: EvolutionCardProps) {
  const navigate = useNavigate();
  function handleTrigger(trigger: string) {
    //options: "level-up" | "trade" | "use-item" | "shed" | "other"

    switch (trigger) {
      case "use-item":
        if (evolution.name === "glaceon" || evolution.name === "leafeon") {
          return (
            <Trigger>
              <CustomTooltip
                arrow
                placement="top"
                title={evolution.details![3].item?.name.split("-").join(" ")}
              >
                <img
                  src={evolution.trigger!.sprite}
                  alt={evolution.details![3].item?.name}
                />
              </CustomTooltip>
            </Trigger>
          );
        }
        return (
          <Trigger>
            <CustomTooltip
              placement="top"
              arrow
              title={evolution.details![0].item?.name.split("-").join(" ")}
            >
              <img
                src={evolution.trigger!.sprite}
                alt={evolution.details![0].item?.name}
              />
            </CustomTooltip>
          </Trigger>
        );

      case "level-up":
        return (
          <Trigger>
            <div className="level-up">
              {evolution.details![0].min_level && (
                <CustomTooltip arrow title={"Level"} placement="top">
                  <>
                    <ArrowFatLinesUp size={16} />
                    <Text size="md">{evolution.details![0].min_level}</Text>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_beauty && (
                <CustomTooltip arrow title={"Level"} placement="top">
                  <>
                    <IoSparkles size={16} color="yellow" />
                    <Text size="md">{evolution.details![0].min_beauty}</Text>
                  </>
                </CustomTooltip>
              )}
              {evolution.details![0].min_happiness && (
                <CustomTooltip
                  placement="top"
                  arrow
                  title={"Felicidade"}
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  <div className="min_effect">
                    <IoMdHappy size={16} />
                    <Text size="md">{evolution.details![0].min_happiness}</Text>
                    {evolution.details![0].time_of_day === "day" ? (
                      <FaSun size={14} color="yellow" />
                    ) : (
                      <FaMoon size={14} color="gray" />
                    )}
                  </div>
                </CustomTooltip>
              )}
              {evolution.details![0].min_affection && (
                <CustomTooltip arrow title={"Afeição"} placement="top">
                  <div className="min_effect">
                    <FaHeart size={16} color="red" />
                    <Text size="md">{evolution.details![0].min_affection}</Text>
                  </div>
                </CustomTooltip>
              )}
              {evolution.details![0].gender === 1 && (
                <CustomTooltip arrow title={"Gênero"} placement="top">
                  <div className="min_effect">
                    <IoFemale size={16} color="red" />
                    <Text size="md">{evolution.details![0].min_affection}</Text>
                  </div>
                </CustomTooltip>
              )}
            </div>
          </Trigger>
        );
      case "trade":
        return (
          <Trigger>
            <CustomTooltip arrow title="Troca" placement="top">
              <div className="level-up">
                <CgArrowsExchangeAltV size={20} />
              </div>
            </CustomTooltip>
          </Trigger>
        );
      default:
        return (
          <Trigger>
            <div className="spacer" />
          </Trigger>
        );
    }
  }

  function handleRedirect(name: string) {
    return setTimeout(() => {
      navigate(`/pokemon/${name}`);
      location.reload();
    }, 500);
  }

  // console.log(evolution.name, evolution.details);
  return (
    <Container onClick={() => handleRedirect(evolution.name)}>
      {evolution.trigger && handleTrigger(evolution.trigger.name)}
      <img
        src={shiny ? evolution.sprites.shiny : evolution.sprites.default}
        alt={evolution.name}
      />
      <Text transform="capitalize">{evolution.name}</Text>
    </Container>
  );
}

//(<div>{handleTrigger(evolution.details[0].trigger.name)}</div>)

export default EvolutionCard;
