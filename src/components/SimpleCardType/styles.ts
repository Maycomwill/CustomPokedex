import styled from "styled-components";
import { backgroundColorType } from "../TypeCard/styles";

interface ITypeProps {
  pokemonType: string
};

export const Container = styled.div<ITypeProps>`
  background-color: ${({ pokemonType }) => backgroundColorType(pokemonType)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;

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
`
