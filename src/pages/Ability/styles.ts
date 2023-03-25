import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: .1rem .4rem 0 .4rem;

  .abilityName{
    text-align: center;
  }

  .descriptionDiv{
    padding: 1.2rem 2.4rem;
    text-align: justify;
  }

  .pokemonCommon{
    text-align: center;
    padding: 1.2rem 0;
  }

  .pokemons{
    display: grid;
    gap: 1.2rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, minmax(5rem, .85fr));
    place-items: center;

    @media (max-width: 500px){
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
  }
`;

