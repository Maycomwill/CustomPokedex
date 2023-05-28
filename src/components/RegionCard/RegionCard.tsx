import React from "react";
import { TextStyled } from "../Text/styles";
import { Container } from "./styles";
interface RegionCardProps {
  region: {
    region_name:
      | "kanto"
      | "johto"
      | "hoenn"
      | "sinnoh"
      | "unova"
      | "kalos"
      | "alola"
      | "galar"
      | "paldea";
    number: number;
  };
}

export function RegionCard(props: RegionCardProps) {
  return (
    <Container region={props.region.region_name}>
      <div id="filter" />
      <div>
        <TextStyled size="xlg" cap="true" color="white" weight="bold">
          {props.region.region_name}
        </TextStyled>
        <TextStyled size="md" cap="true" color="white" weight="semi-bold">
          {props.region.number}º região
        </TextStyled>
      </div>
    </Container>
  );
}
