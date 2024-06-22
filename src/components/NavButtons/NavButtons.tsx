import { Button } from "../Button";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

function NavButtons() {
  const screenWidth = screen.width;
  const params = useParams();
  let generation = params.generationid;
  let navigate = useNavigate();

  if (screenWidth > 500) {
    if (generation == "1") {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root disabled color="primary" id="zeroGen" size="small">
              <Button.Content text={""} />
            </Button.Root>
            <Button.Root
              color="delete"
              size="small"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Home"} />
            </Button.Root>
            <Button.Root
              color="primary"
              size="small"
              onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
            >
              <Button.Content text={`Geração ${Number(generation) + 1}`} />
              <Button.RightIcon icon={CaretRight} size={24} />
            </Button.Root>
          </div>
        </Container>
      );
    } else if (generation == "9") {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root
              color="primary"
              size="small"
              onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
            >
              <Button.LeftIcon icon={CaretLeft} size={24} />
              <Button.Content text={`Geração ${Number(generation) - 1}`} />
            </Button.Root>
            <Button.Root
              color="delete"
              size="small"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Voltar"} />
            </Button.Root>
            <Button.Root color="primary" id="zeroGen" size="small">
              <Button.Content text={""} />
            </Button.Root>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root
              color="primary"
              size={"small"}
              onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
            >
              <Button.LeftIcon icon={CaretLeft} size={24} />
              <Button.Content text={`Geração ${Number(generation) - 1}`} />
            </Button.Root>
            <Button.Root
              size={"small"}
              color="delete"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Voltar"} />
            </Button.Root>
            <Button.Root
              color="primary"
              size={"small"}
              onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
            >
              <Button.Content text={`Geração ${Number(generation) + 1}`} />
              <Button.RightIcon icon={CaretRight} size={24} />
            </Button.Root>
          </div>
        </Container>
      );
    }
  } else {
    if (generation == "1") {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root color="primary" id="zeroGen" size="small">
              <Button.Content text={""} />
            </Button.Root>
            <Button.Root
              color="delete"
              size="small"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Voltar"} />
            </Button.Root>
            <Button.Root
              color="primary"
              size="small"
              onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
            >
              <Button.Content text={`Gen ${Number(generation) + 1}`} />
              <Button.RightIcon icon={CaretRight} size={24} />
            </Button.Root>
          </div>
        </Container>
      );
    } else if (generation == "9") {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root
              color="primary"
              size="small"
              onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
            >
              <Button.LeftIcon icon={CaretLeft} size={24} />
              <Button.Content text={`Gen ${Number(generation) - 1}`} />
            </Button.Root>
            <Button.Root
              color="delete"
              size="small"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Voltar"} />
            </Button.Root>
            <Button.Root color="primary" id="zeroGen" size="small" disabled>
              <Button.Content text={""} />
            </Button.Root>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div className="navButtons">
            <Button.Root
              color="primary"
              size={"small"}
              onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
            >
              <Button.LeftIcon icon={CaretLeft} size={24} />
              <Button.Content text={`Gen ${Number(generation) - 1}`} />
            </Button.Root>
            <Button.Root
              size={"small"}
              color="delete"
              onClick={() => navigate("/")}
            >
              <Button.Content text={"Voltar"} />
            </Button.Root>
            <Button.Root
              color="primary"
              size={"small"}
              onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
            >
              <Button.Content text={`Gen ${Number(generation) + 1}`} />
              <Button.RightIcon icon={CaretRight} size={24} />
            </Button.Root>
          </div>
        </Container>
      );
    }
  }
}

export default NavButtons;
