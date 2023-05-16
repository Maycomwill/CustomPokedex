import React from "react";
import { Container } from "./styles";
import { Button } from "../Button/Button";
import { useTheme } from "styled-components";

interface IFooterProps {
  id: string;
}

export function Footer({ id }: IFooterProps) {

  return (
    <Container id={id}>
      {/* <div>
        <Button text={"Toggle Theme"}/>
      </div> */}
      Footer
    </Container>
  );
}
