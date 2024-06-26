import { ButtonHTMLAttributes } from "react";
import { Text } from "../Text/Text";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
interface RegionCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  const navigate = useNavigate()

  return (
    <Container region={props.region.region_name} onClick={()=>navigate(`/pokedex/${props.region.number}`)}>
      <div id="filter" />
      <div>
        <Text size="xxl" transform="capitalize" color="white" weight="bold">
          {props.region.region_name}
        </Text>
        <Text size="md" transform="capitalize" color="white" weight="semi-bold">
          {props.region.number}º geração
        </Text>
      </div>
    </Container>
  );
}
