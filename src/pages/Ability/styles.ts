import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: .1rem .4rem 0 .4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .abilityName{
    text-align: center;
  }

  .descriptionDiv{
    width: min(120rem, 97%);
    padding: 1.2rem 2.4rem;
    text-align: justify;
  }

  .pokemonCommon{
    width: min(120rem, 97%);
    text-align: center;
    padding: 1.2rem 0;
  }

  .pokemons{
    width: min(120rem, 97%);
    margin: auto;
    padding-top: 1.2rem;
    display: grid;
    gap: 1.2rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, minmax(5rem, 0.85fr));
    place-items: center;

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .backButton{
    width: 10rem;
    margin: auto;
    margin-top: 2.4rem;
    padding-bottom: 1.6rem;
  }
`;

