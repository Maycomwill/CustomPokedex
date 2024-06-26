import MWLogo from "../../assets/logo.svg";
import { Container } from "./styles";

interface IHeaderProps {
  id: string
}

export function Header({id}: IHeaderProps) {
  return (
    <Container id={id}>
      <div id="logos">
        <a href="/">
          <img
            alt="PokeApi Logo"
            width={100}
            height={40}
            src={
              "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            }
          />
        </a>
        <div id="maycomLogo">
        <a rel="noopener" href="https://github.com/maycomwill" target="_blank">
          <img
            alt="Maycom Willams Logo"
            width={50}
            src={MWLogo}
          />
        </a>
        </div>
      </div>
    </Container>
  );
}
