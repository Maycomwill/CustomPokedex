import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";
import { Text } from "../Text/Text";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text: string;
  animated?: boolean | undefined;
  size?: "small" | "big" | undefined;
  color?: "gray" | "delete" | "standard" | "primary";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  children,
  text,
  size,
  color,
  animated,
  leftIcon,
  rightIcon,
  ...rest
}: IButtonProps) {
  function handleSizeButton(size: string | undefined) {
    switch (size) {
      case "big":
        return "xxl";

      case "small":
        return "sm";

      case undefined:
        return "md";
    }
  }

  return (
    <ButtonStyled
      color={color}
      size={size}
      animated={animated}
      text={text}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...rest}
    >
      {leftIcon}
      {children}
      <Text size={handleSizeButton(size)}>{text}</Text>
      {rightIcon}
    </ButtonStyled>
  );
}
