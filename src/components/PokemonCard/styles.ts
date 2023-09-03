import { darken, tint } from "polished";
import styled from "styled-components";
import theme from "../../styles/theme";

interface IContainerProps {
  color: string;
}

export function backgroundColorType(color?: string) {
  switch (color) {
    case "bug":
      return `${theme.backgroundCard.bug}`;
    case "dark":
      return `${theme.backgroundCard.dark}`;
    case "dragon":
      return `${theme.backgroundCard.dragon}`;
    case "electric":
      return `${theme.backgroundCard.electric}`;
    case "fairy":
      return `${theme.backgroundCard.fairy}`;
    case "fighting":
      return `${theme.backgroundCard.fighting}`;
    case "fire":
      return `${theme.backgroundCard.fire}`;
    case "flying":
      return `${theme.backgroundCard.flying}`;
    case "ghost":
      return `${theme.backgroundCard.ghost}`;
    case "grass":
      return `${theme.backgroundCard.grass}`;
    case "ground":
      return `${theme.backgroundCard.ground}`;
    case "ice":
      return `${theme.backgroundCard.ice}`;
    case "normal":
      return `${theme.backgroundCard.normal}`;
    case "poison":
      return `${theme.backgroundCard.poison}`;
    case "psychic":
      return `${theme.backgroundCard.psychic}`;
    case "rock":
      return `${theme.backgroundCard.rock}`;
    case "steel":
      return `${theme.backgroundCard.steel}`;
    case "water":
      return `${theme.backgroundCard.water}`;
    default:
      return `${theme.colors.accent[200]}`;
  }
}

export const Container = styled.button<IContainerProps>`
height: 12rem;
  width: 100%;
  border: 0;
  outline: none;
  border-radius: 0.8rem;
  background-color: ${({ color }) => tint(0.85, backgroundColorType(color))};
  /* border-bottom: .4rem solid ${({ color }) =>
    darken(0.2, backgroundColorType(color))}; */
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color .25s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 500px) {
    height: 12rem;
    flex-direction: row;

  }

  :hover {
    background-color: ${({ color }) =>
    backgroundColorType(color)};
  }

  .leftWrapper {
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.8rem 2.4rem;
    flex: 1;

    @media (max-width: 500px) {
      height: 12rem;
    }
  }

  .pokemonInfoDiv {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.4rem;
    }
  }

  .pokemonInfoDiv #pokemonName {
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  .typesWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding-bottom: 0.8rem;
  }

  .typesCards ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .rightWrapper {
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11rem;
    height: 100%;
    background-color: ${({ color }) => backgroundColorType(color)};
    position: relative;
    z-index: 10;
    border-radius: 0.8rem;
  }

  .spriteDiv img {
    height: 8rem;
    position: relative;
    z-index: 10;
  }

  .spriteDiv .svg-Type-Pokemon-img {
    opacity: 0.25;
    height: 8rem;
    position: absolute;
    z-index: 0;
    object-fit: cover;
  }
`;
