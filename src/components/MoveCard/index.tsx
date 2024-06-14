import { Text } from "../Text/Text";
import { NamedAPIResource } from "../../interfaces/apiInterfaces";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

function MoveCard({ move }: { move: NamedAPIResource }) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/moves/${move.name}`)}>
      <Text size="md">{move.name.split("-").join(" ")}</Text>
    </Container>
  );
}

export default MoveCard;
