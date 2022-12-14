import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { usePokedex } from "../hooks/usePokedex";
import { IndexRoutes } from "../routes";
import { Container } from "./styles";

function Index() {

  return (
    <Container>
      <Header />
      <IndexRoutes />
    </Container>
  );
}

export default Index;
