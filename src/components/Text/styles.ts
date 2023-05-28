import { ReactNode } from 'react'
import styled from 'styled-components';
import theme from '../../styles/theme';

export interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  //size?: "1rem" | "1.4rem" | "1.6rem" | "2rem" | "2.4rem" | "3rem";
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxl';
  color?: "accent" | "gray" | "primary" | "white" | undefined;
  transform?: "capitalize" | "uppercase" | "lowercase" | undefined;
  weight?: "regular" | "semi-bold" | "bold" | undefined;
  cap?: "true" | undefined;
}

const handleTextColor = (color: string | undefined) => {
  switch (color) {
    case "accent":
      return `${theme.colors.accent[500]}`;
    case "gray":
      return `${theme.colors.gray[900]}`;
    case "white":
      return `${theme.colors.gray[100]}`;
    case "primary":
      return `${theme.colors.primary[500]}`;
    case undefined:
      return `${theme.colors.gray[100]}`
    default:
      return `${theme.colors.gray[100]}`;
  }
};

const handleFontWeight = (weight: string | undefined) => {
  switch (weight) {
    case "regular":
      return 400;
    case "semi-bold":
      return 600;
    case "bold":
      return 700
    case undefined: {
      return 400;
    }
  }
}

const handleCapitilize = (cap: "true" | undefined) => {
  if (cap == "true") {
    return "capitalize"
  } return "normal"
}

export const TextStyled = styled.span<ITextProps>`
  color: ${({ color }) => handleTextColor(color)};
  font-size: ${({ size }) => size ? `${theme.fontSize[size]}` : "1.6rem"};
  text-transform: ${({ transform }) => transform};
  font-weight: ${({ weight }) => handleFontWeight(weight)};
  text-transform: ${({ cap }) => handleCapitilize(cap)};

  @media (max-width: 500px){
    font-size: 1.4rem;
  }
`;
