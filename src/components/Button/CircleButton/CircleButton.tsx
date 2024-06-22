import React, { ReactNode } from "react";
import { ICircleButton } from "./CircleStyles";

export interface ICircleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  backgroundColor?: "gray" | "white";
}

export function CircleButton({ backgroundColor="white", children, ...rest }: ICircleButtonProps) {
  return <ICircleButton backgroundColor={backgroundColor} {...rest}>{children}</ICircleButton>;
}
