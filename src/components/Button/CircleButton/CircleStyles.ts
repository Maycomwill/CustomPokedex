import styled from "styled-components";
import { ICircleButtonProps } from "./CircleButton";

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
`;
