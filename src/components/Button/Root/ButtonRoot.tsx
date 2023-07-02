import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "big" | undefined;
  backgroundColor?: "gray" | "delete" | "standard" | "primary";
  animated?: boolean;
}
export function ButtonRoot({
  children,
  backgroundColor = "standard",
  ...rest
}: ButtonRootProps) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}
