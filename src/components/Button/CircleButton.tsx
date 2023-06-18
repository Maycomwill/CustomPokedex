import React, { ReactNode } from "react";
import { ICircleButton } from "./CircleStyles";

export interface ICircleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function CircleButton({ children, ...rest }: ICircleButtonProps) {
  return <ICircleButton {...rest}>{children}</ICircleButton>;
}
