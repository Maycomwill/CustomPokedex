import { Container } from "./styles";
import { TextStyled } from "../Text/styles";

interface IFooterProps {
  id: string;
}

export function Footer({ id }: IFooterProps) {

  return (
    <Container id={id}>
      {/* <div>
        <Button text={"Toggle Theme"}/>
      </div> */}
      <TextStyled color="white" size="xsm">Criado por {" "}<a href="https://github.com/maycomwill" target="
      _blank" rel="noopener">Maycom Willams</a> com 💚</TextStyled>
    </Container>
  );
}
