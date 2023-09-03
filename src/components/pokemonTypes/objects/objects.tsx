import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Flying,
  Fire,
  Fighting,
  Grass,
  Ghost,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from "../";

import bug from "../../../assets/TypesSvg/bug.svg";
import dark from "../../../assets/TypesSvg/dark.svg";
import dragon from "../../../assets/TypesSvg/dragon.svg";
import electric from "../../../assets/TypesSvg/electric.svg";
import fairy from "../../../assets/TypesSvg/fairy.svg";
import flying from "../../../assets/TypesSvg/flying.svg";
import fire from "../../../assets/TypesSvg/fire.svg";
import fighting from "../../../assets/TypesSvg/fighting.svg";
import ghost from "../../../assets/TypesSvg/ghost.svg";
import grass from "../../../assets/TypesSvg/grass.svg";
import ground from "../../../assets/TypesSvg/ground.svg";
import ice from "../../../assets/TypesSvg/ice.svg";
import normal from "../../../assets/TypesSvg/normal.svg";
import poison from "../../../assets/TypesSvg/poison.svg";
import psychic from "../../../assets/TypesSvg/psychic.svg";
import rock from "../../../assets/TypesSvg/rock.svg";
import steel from "../../../assets/TypesSvg/steel.svg";
import water from "../../../assets/TypesSvg/water.svg";

interface TypesProps {
  pokemonType: string;
  width?: number;
  height?: number;
}

export function poketypesComponents({
  pokemonType,
  width,
  height,
}: TypesProps) {
  const aspect = width! / height!;
  const adjustHeight = Math.ceil(width! / aspect);
  switch (pokemonType) {
    case "bug":
      return (
        <Bug
          fill={"#8BD674"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "dark":
      return (
        <Dark
          fill={"#6F6E78"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "dragon":
      return (
        <Dragon
          fill={"#7383B9"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "electric":
      return (
        <Electric
          fill={"#fdd835"}
          width={width}
          height={height}
          viewBox={`-5 0 ${width} ${adjustHeight}`}
        />
      );
    case "fairy":
      return (
        <Fairy
          fill={"#EC8FE6"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "flying":
      return (
        <Flying
          fill={"#7ACFF7"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "fire":
      return (
        <Fire
          fill={"#F3634E"}
          width={width}
          height={height}
          viewBox={`-2 0 ${width} ${adjustHeight}`}
        />
      );
    case "fighting":
      return (
        <Fighting
          fill={"#FB91A3"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "ghost":
      return (
        <Ghost
          fill={"#8571BE"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "grass":
      return (
        <Grass
          fill={"#4caf50"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "ground":
      return (
        <Ground
          fill={"#ffab91"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "ice":
      return (
        <Ice
          fill={"#6DF6E5"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "normal":
      return (
        <Normal
          fill={"#B5B9C4"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "poison":
      return (
        <Poison
          fill={"#B567CE"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "psychic":
      return (
        <Psychic
          fill={"#FA7179"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "rock":
      return (
        <Rock
          fill={"#bcaaa4"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "steel":
      return (
        <Steel
          fill={"#88a0b5"}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${adjustHeight}`}
        />
      );
    case "water":
      return (
        <Water
          fill={"#4AA5F7"}
          width={width}
          height={height}
          viewBox={`-4 0 ${width} ${adjustHeight}`}
        />
      );
  }
}
export const pokemonTypesSVGComponents = {
  bug: <Bug />,
  dark: <Dark />,
  dragon: <Dragon />,
  electric: <Electric />,
  fairy: <Fairy />,
  flying: <Flying />,
  fire: <Fire />,
  fighting: <Fighting />,
  ghost: <Ghost />,
  grass: <Grass />,
  ground: <Ground />,
  ice: <Ice />,
  normal: <Normal />,
  poison: <Poison />,
  psychic: <Psychic />,
  rock: <Rock />,
  steel: <Steel />,
  water: <Water />,
} as any;

export const pokemonTypesObject = {
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
