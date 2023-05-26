import { ITextProps, TextStyled } from "./styles";

function Text({ children, size, ...rest }: ITextProps) {
  return <TextStyled size="xsm" color="accent" {...rest}>{children}</TextStyled>;
}

export default Text;
