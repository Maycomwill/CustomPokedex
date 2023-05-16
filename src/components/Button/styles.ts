import styled from 'styled-components';
import theme from '../../styles/theme';
import { lighten, saturate, shade } from 'polished'
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
    case "primary":
      return `${theme.colors.primary[500]}`;
    case "gray":
      return `${theme.colors.gray[700]}`;
    case "delete":
      return `${theme.colors.red}`;
    case "standard":
      return `${theme.colors.accent[300]}`;
    default:
      return `${theme.colors.accent[300]}`
  }
}

export const ButtonStyled = styled.button<IButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => handleButtonColor(color)};
  outline: none;
  border: .2rem solid rgb(0 0 0 / 0);
  border-radius: .4rem;
  padding: ${({ size }) => handleSizeButton(size)};
  cursor: pointer;
  transition: transform .2s ease;

  :hover{
    background-color: ${({ color }) => {if(color == "delete"){
      return `${lighten(0.2, handleButtonColor(color))}`
    }else {
      return `${saturate(0.2, handleButtonColor(color))}`
    }}};
    transform: translateY(-.2rem)
  };


  :focus {
      border: .2rem solid ${({color}) => {if(color == "standard" || color == undefined){
        return `${theme.colors.primary[200]}`
      }else if(color == "delete"){
        return  `${theme.colors.red}`
      }else {
        return `${theme.colors.accent[200]}`
      }}};
  }
`;
