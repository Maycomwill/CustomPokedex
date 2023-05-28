import React, { FormEvent, useState } from "react";
import { Container } from "./styles";
import { RegionCard } from "../RegionCard/RegionCard";
import { useNavigate } from "react-router-dom";
import { TextStyled } from "../Text/styles";

export function RegionsForm() {
  const navigate = useNavigate();

  function handleNavigation(generation: string) {
    navigate(`/pokedex/${generation}`);
  }

  return (
    <Container>
      <TextStyled>Navege pelas regiões do mundo pokemon</TextStyled>
      <div className="card-wrapper">
        <RegionCard region={{ region_name: "kanto", number: 1 }} />

        <RegionCard region={{ region_name: "johto", number: 2 }} />

        <RegionCard region={{ region_name: "hoenn", number: 3 }} />

        <RegionCard region={{ region_name: "sinnoh", number: 4 }} />

        <RegionCard region={{ region_name: "unova", number: 5 }} />

        <RegionCard region={{ region_name: "kalos", number: 6 }} />

        <RegionCard region={{ region_name: "alola", number: 7 }} />
        <RegionCard region={{ region_name: "galar", number: 8 }} />

        <RegionCard region={{ region_name: "paldea", number: 9 }} />
      </div>
    </Container>
  );
}
