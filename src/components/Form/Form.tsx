import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import { Button } from "../Button/Button";
import { Loading } from "../Loading/Loading";
import { TextStyled } from "../Text/styles";
import { Container, RadiosDivWrapper } from "./styles";

export function Form() {
  const [generation, setGeneration] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleGenerationSelected(e: FormEvent) {
    setIsLoading(true);
    try {
      if (generation != undefined) {
        e.preventDefault();
        setTimeout(handleNavigation, 500);
      } else {
        alert("Uma opção deve ser selecionada!");
        window.location.reload;
      }
    } catch (error) {
      console.log("Erro ao escolher opção");
    } finally {
    }
  }

  function handleNavigation() {
    navigate(`/pokedex/${generation}`);
  }

  return (
    <Container>
        <form className="form" onSubmit={handleGenerationSelected}>
          <fieldset>
            <legend>
              <TextStyled size="xxl" weight="semi-bold">
                Selecione qual a geração você deseja pesquisar
              </TextStyled>
            </legend>
          </fieldset>
          <RadiosDivWrapper>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen1"
                  value="1"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen1">Geração 1</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen2"
                  value="2"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen2">Geração 2</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen3"
                  value="3"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen3">Geração 3</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen4"
                  value="4"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen4">Geração 4</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen5"
                  value="5"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen5">Geração 5</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen6"
                  value="6"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen6">Geração 6</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen7"
                  value="7"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen7">Geração 7</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen8"
                  value="8"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen8">Geração 8</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="generation"
                  id="gen9"
                  value="9"
                  onChange={(e) => setGeneration(e.target.value)}
                />
                <label htmlFor="gen9">Geração 9</label>
              </div>
            </div>
          </RadiosDivWrapper>
          <div className="Button-Div">
            {isLoading ? (
              <Button text="">
                <Loading color={theme.colors.gray[100]} size={30} />
              </Button>
            ) : (
              <Button text="Enviar" />
            )}
          </div>
        </form>
    </Container>
  );
}
