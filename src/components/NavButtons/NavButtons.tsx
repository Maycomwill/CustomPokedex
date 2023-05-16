import React from "react";
import { Button } from "../Button/Button";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

function NavButtons() {
  const params = useParams();
  let generation = params.generationid;
  let navigate = useNavigate();

  if (generation == "1") {
    return (
      <Container>
        <div className="navButtons">
          <Button color="primary" id="zeroGen" text={""}></Button>
          <Button
            size={"small"}
            color="delete"
            onClick={() => navigate("/")}
            text={"Home"}
          />
          <Button
            color="primary"
            size={"small"}
            text={`Geração ${Number(generation) + 1}`}
            onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
          >
            <CaretRight size={24} />
          </Button>
        </div>
      </Container>
    );
  } else if (generation == "9") {
    return (
      <Container>
        <div className="navButtons">
          <Button
            color="primary"
            size={"small"}
            text={`Geração ${Number(generation) - 1}`}
            onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
          >
            <CaretLeft size={24} />
          </Button>
          <Button
            size={"small"}
            color="delete"
            onClick={() => navigate("/")}
            text={"Home"}
          />
          <Button color="primary" id="zeroGen" text={""}></Button>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="navButtons">
          <Button
            color="primary"
            size={"small"}
            text={`Geração ${Number(generation) - 1}`}
            onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}
          >
            <CaretLeft size={24} />
          </Button>
          <Button
            size={"small"}
            color="delete"
            onClick={() => navigate("/")}
            text={"Voltar"}
          />
          <Button
            color="primary"
            size={"small"}
            text={`Geração ${Number(generation) + 1}`}
            onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}
          >
            <CaretRight size={24} />
          </Button>
        </div>
      </Container>
    );
  }
}

export default NavButtons;
