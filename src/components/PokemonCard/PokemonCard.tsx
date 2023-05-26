import { Container } from "./styles";
import { typeProps } from "../../interfaces/pokemonInterfaces";
import { TextStyled } from "../Text/styles";
import { TypeCard } from "../TypeCard/TypeCard";
import { useNavigate } from "react-router-dom";

interface PokemonProps {
  name: string;
  id: number;
  sprite: string;
  types: typeProps[];
  primaryType: string;
  pressable?: boolean;
}

export function PokemonCard({
  name,
  id,
  types,
  sprite,
  primaryType,
  pressable = false,
}: PokemonProps) {
  function addZeroes(num: string, len: number) {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;

    while (counter < len) {
      numberWithZeroes = "0" + numberWithZeroes;

      counter++;
    }

    return numberWithZeroes;
  }

  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/pokemon/${name}`);
      }}
      color={primaryType}
    >
      <div className="topWrapper">
        <div className="pokemonInfoDiv">
          <TextStyled
            size="lg"
            weight="bold"
            transform="capitalize"
            color="gray"
          >
            {name.split("-").join(" ")}
          </TextStyled>
          <TextStyled weight="semi-bold" color="gray">
            #{addZeroes(String(id), 3)}
          </TextStyled>
        </div>
        <div className="spriteDiv">
          <img src={sprite} alt={`${name} sprite`} />
        </div>
      </div>
      <div className="typesWrapper">
        <TextStyled color="gray" transform="capitalize">
          types:
        </TextStyled>
        <div className="typesCards">
          {types.map((type) => {
            return (
              <TypeCard
                pressable={false}
                pokemonType={type.type}
                key={`${type.type}`}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
