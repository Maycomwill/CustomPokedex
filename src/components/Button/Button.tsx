import React, { ReactNode } from "react";
import { TextStyled } from "../Text/styles";
import { ButtonStyled } from "./styles";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "big" | undefined;
  color?: "gray" | "delete" | "standard";
}

export function Button({ children, size, color, ...rest }: IButtonProps) {

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
    <ButtonStyled color={color} size={size} {...rest}>
      <TextStyled size={handleSizeButton(size)}>{children}</TextStyled>
    </ButtonStyled>
  );
}
