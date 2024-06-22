import styled from "styled-components";
import { ICircleButtonProps } from "./CircleButton";
import theme from "../../../styles/theme";

function handleBackgroundColor(color: string | undefined){
  switch(color){
    case "gray":
      return `${theme.colors.gray[800]}`

    case "white":
      return `${theme.colors.gray[100]}`
  }
}

export const ICircleButton = styled.button<ICircleButtonProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => handleBackgroundColor(backgroundColor)};
`;
