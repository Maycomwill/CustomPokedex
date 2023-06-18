import { Text } from "../Text/Text";
import { Container, ContainerButton } from "./styles";

import bug from "../../assets/TypesSvg/bug.svg";
import dark from "../../assets/TypesSvg/dark.svg";
import dragon from "../../assets/TypesSvg/dragon.svg";
import electric from "../../assets/TypesSvg/electric.svg";
import fairy from "../../assets/TypesSvg/fairy.svg";
import flying from "../../assets/TypesSvg/flying.svg";
import fire from "../../assets/TypesSvg/fire.svg";
import fighting from "../../assets/TypesSvg/fighting.svg";
import ghost from "../../assets/TypesSvg/ghost.svg";
import grass from "../../assets/TypesSvg/grass.svg";
import ground from "../../assets/TypesSvg/ground.svg";
import ice from "../../assets/TypesSvg/ice.svg";
import normal from "../../assets/TypesSvg/normal.svg";
import poison from "../../assets/TypesSvg/poison.svg";
import psychic from "../../assets/TypesSvg/psychic.svg";
import rock from "../../assets/TypesSvg/rock.svg";
import steel from "../../assets/TypesSvg/steel.svg";
import water from "../../assets/TypesSvg/water.svg";
import { useNavigate } from "react-router-dom";

interface ITypeCardProps {
  pokemonType: string;
  pressable?: boolean;
}

export function TypeCard({ pokemonType, pressable, ...rest }: ITypeCardProps) {
  const navigate = useNavigate();
  const pokemonTypesObject = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    flying: flying,
    fire: fire,
    fighting: fighting,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water,
  } as any;

  function pokemonTypeImageName(typeName: string) {
    return pokemonTypesObject[typeName];
  }

  if (pressable === true) {
    return (
      <ContainerButton
        pokemonType={pokemonType}
        onClick={() => navigate(`/type/${pokemonType}`)}
      >
        <div className="typeName">
          <Text transform="capitalize">{pokemonType}</Text>
        </div>
        <div className="svgDiv">
          <img
            width={20}
            height={20}
            src={pokemonTypeImageName(pokemonType)}
            alt={`${pokemonType} image`}
          />
        </div>
      </ContainerButton>
    );
  } else {
    return (
      <Container pokemonType={pokemonType}>
        <div className="typeName">
          <Text transform="capitalize">{pokemonType}</Text>
        </div>
        <div className="svgDiv">
          <img
            width={20}
            height={20}
            src={pokemonTypeImageName(pokemonType)}
            alt={`${pokemonType} image`}
          />
        </div>
      </Container>
    );
  }
}
