import { darken } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface ITypeProps{
  type: string
};

function backgroundColorType(color: string){
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

export const Container = styled.div<ITypeProps>`
  background-color: ${({type}) => darken(0.2, backgroundColorType(type))};
  width: 12rem;
  border-radius: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: .8rem 1.6rem;
/*
futura opção para ver as informações da tipagem
  :hover{
    background-color: ${({type}) => darken(0.3, backgroundColorType(type))};
  } */
`;
