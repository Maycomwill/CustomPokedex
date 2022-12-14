import styled from 'styled-components';
import theme from '../../styles/theme';
import { tint } from 'polished'
import { IButtonProps } from './Button';

const handleSizeButton = (size: string | undefined) => {
  switch (size) {
    case "big":
      return "1rem 3rem";
    case "small":
      return ".4rem 1.2rem";
    case undefined:
      return ".8rem 2.4em";
    default:
      return ".8rem 2.4rem";

  }
}

const handleButtonColor = (color: string | undefined) => {
  switch (color) {
    case "gray":
      return `${theme.colors.gray[700]}`;
    case "delete":
      return `${theme.colors.red}`;
    case "standard":
      return `${theme.colors.purple[500]}`;
    default:
      return `${theme.colors.purple[500]}`
  }
}

export const ButtonStyled = styled.button<IButtonProps>`
  width: 100%;
  background-color: ${({ color }) => handleButtonColor(color)};
  outline: none;
  border: .2rem solid rgb(0 0 0 / 0);
  border-radius: .4rem;
  padding: ${({ size }) => handleSizeButton(size)};
  cursor: pointer;

  :hover{
    background-color: ${({ color }) => tint(0.2, handleButtonColor(color))}
  };


  :focus {
      border: .2rem solid ${theme.colors.yellow[500]};
  }
`;
