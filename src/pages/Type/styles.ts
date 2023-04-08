import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .pokemonCard-wrapper {
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
`;
