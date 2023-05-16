import React, { ReactNode } from "react";
import { TextStyled } from "../Text/styles";
import { ButtonStyled } from "./styles";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text: string;
  size?: "small" | "big" | undefined;
  color?: "gray" | "delete" | "standard" | "primary";
}

export function Button({ children, text, size, color, ...rest }: IButtonProps) {

  function handleSizeButton(size: string | undefined) {
    switch(size){
      case "big":
        return "xxl";

      case "small":
        return "sm";

      case undefined:
        return "md"
    }
  }

  return (
    <ButtonStyled color={color} size={size} {...rest} text={text}>
      {children}
      <TextStyled size={handleSizeButton(size)}>{text}</TextStyled>
    </ButtonStyled>
  );
}
