import { darken } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface IContainerProps {
  color: string
}

export function backgroundColorType(color?: string){
  switch(color){
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
      return `${theme.colors.purple[200]}`
  }
}

export const Container = styled.button<IContainerProps>`
  border: 0;
  outline: none;
  width: 80%;
  border-radius: .8rem;
  background-color: ${({color}) => backgroundColorType(color)};
  border-bottom: .4rem solid ${({color}) => darken(0.3, backgroundColorType(color))};
  cursor: pointer;

  @media (max-width: 500px){
    height: 31rem
  };

  :hover{
    background-color: ${({color}) => darken(0.05, backgroundColorType(color))};
    border-bottom: .4rem solid ${({color}) => darken(0.4, backgroundColorType(color))};
  };

  .topWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 2.4rem;

    @media (max-width: 500px){
      flex-direction: column;
    }
  };

  .pokemonInfoDiv{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 500px){
      flex-direction: column;
      align-items: center;
      gap: .4rem;
    }
  };

  .typesWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding-bottom: .8rem;
  };

  .typesCards{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    @media (max-width: 500px){
      flex-direction: column
    }
  }
`;
