import { Container } from "./styles";
import { Text } from "../Text/Text";

interface IFooterProps {
  id: string;
}

export function Footer({ id }: IFooterProps) {

  return (
    <Container id={id}>
      {/* <div>
        <Button text={"Toggle Theme"}/>
      </div> */}
      <Text color="white" size="xsm">Criado por {" "}<a href="https://github.com/maycomwill" target="
      _blank" rel="noopener"><Text color="white" size="xsm">Maycom Willams</Text></a> com 💚</Text>
    </Container>
  );
}
