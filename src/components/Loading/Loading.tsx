import React from "react";
import { CircleNotch } from "phosphor-react";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface ILoadingProps{
  color: string;
  size: number;
}



export function Loading({color, size}: ILoadingProps) {
  return (
    <Container>
      <div>
        <CircleNotch size={size} color={color} />
      </div>
    </Container>
  );
}
