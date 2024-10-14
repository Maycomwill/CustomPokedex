import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  .pageTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;

    @media (max-width: 500px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
    }
  }

  .pageTitle > span {
    flex: 1;
    gap: 0.4rem;
    text-align: center;
  }

  .pageTitle > div {
    padding-right: 3.2rem;

    @media (max-width: 500px) {
      padding: 0;
    }
  }

  .moves-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.2rem;
  }

  .moves-card-wrapper {
    padding: 0rem 2.4rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    gap: 0.8rem;

    @media (max-width: 1180px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .pokemon-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pokemonCard-wrapper {
    width: min(120rem, 97%);
    margin: auto;
    padding-top: 1.2rem;
    display: grid;
    gap: 1.2rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, minmax(5rem, 0.85fr));
    place-items: center;

    @media (max-width: 1180px) {
      grid-template-columns: repeat(2, minmax(5rem, 0.85fr));
      place-items: center;
    }
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .backButton {
    width: 10%;
    margin: auto;
    padding-top: 1.2rem;
    padding-bottom: 2.4rem;

    @media (max-width: 500px) {
      margin-top: 0.8rem;
      width: 25%;
    }
  }
`;
