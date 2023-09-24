import { darken } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface ITypeProps {
  pokemonType: string
};

export function backgroundColorType(color: string) {
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
      return `${theme.colors.accent[200]}`
  }
}

export const Container = styled.div<ITypeProps>`
  background-color: ${({ pokemonType }) => backgroundColorType(pokemonType)};
  border-radius: 9999rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: .8rem;
  max-width: 10rem;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 500px){
    width: 12rem;
  }

  .svgDiv {
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.4rem;
  }
`;

export const ContainerButton = styled.button<ITypeProps>`
  background-color: ${({ pokemonType }) => backgroundColorType(pokemonType)};
  border-radius: 9999rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: .8rem;
  max-width: 12rem;
  height: 4rem;
  padding: 0rem 3rem;

  @media (min-width: 500px){
    max-width: 10rem;
  }

  .svgDiv {
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.4rem;
  }
/* futura opção para ver as informações da tipagem */
  :hover{
    background-color: ${({ pokemonType }) => darken(0.1, backgroundColorType(pokemonType))};
  }

`;
