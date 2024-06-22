import { Container } from "./styles";
import { poketypesComponents } from "../pokemonTypes/objects/objects";

interface ISimpleTypeCardProps {
  pokemonType: string;
  double_damage_relation: boolean;
}

function SimpleCardType({
  pokemonType,
  double_damage_relation = false,
}: ISimpleTypeCardProps) {

  // console.log("simple type card", double_damage_relation)
  if (double_damage_relation) {
    return (
      <Container pokemonType={pokemonType}>
        <div className="svgDiv">
          {poketypesComponents({
            height: 25,
            width: 25,
            pokemonType,
          })}
          <div className="double_damage_relation">
            <span>4x</span>
          </div>
        </div>
      </Container>
    );
  } else {
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
}

export default SimpleCardType;
