import { ITextProps, TextStyled } from "./styles";

export function Text({ children, size, color, ...rest }: ITextProps) {
  return <TextStyled size={size} color={color} {...rest}>{children}</TextStyled>;
}

