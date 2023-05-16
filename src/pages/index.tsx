import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { usePokedex } from "../hooks/usePokedex";
import { IndexRoutes } from "../routes";
import { Container } from "./styles";
import { Footer } from "../components/Footer/Footer";

function Index() {
  return (
    <Container>
      <Header id="header" />
      <div id="routes">
        <IndexRoutes />
      </div>
      <Footer id="footer" />
    </Container>
  );
}

export default Index;
