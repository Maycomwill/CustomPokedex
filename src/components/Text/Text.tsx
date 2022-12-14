import React, { ReactNode } from "react";
import { ITextProps, TextStyled } from "./styles";


function Text({ children, size, ...rest }: ITextProps) {
  return <TextStyled size="xsm" color="purple">{children}</TextStyled>;
}

export default Text;
