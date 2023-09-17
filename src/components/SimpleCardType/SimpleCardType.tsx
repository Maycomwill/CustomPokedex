import React from "react";
import { Container } from "./styles";
import { poketypesComponents } from "../pokemonTypes/objects/objects";

interface ISimpleTypeCardProps {
  pokemonType: string;
}

function SimpleCardType({ pokemonType }: ISimpleTypeCardProps) {
  return (
    <Container pokemonType={pokemonType}>
      <div className="svgDiv">
        {poketypesComponents({
          height: 25,
          width: 25,
          pokemonType,
        })}
      </div>
    </Container>
  );
}

export default SimpleCardType;
