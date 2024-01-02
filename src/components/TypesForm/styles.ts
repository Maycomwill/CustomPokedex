import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1.6rem 0;

  .types-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
    gap: 1.6rem;
  }

  .typesDiv {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    align-items: center;
  }

  @media (max-width: 500px) {
    .types-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 3.6rem;
      place-items: center;
    }
    .typesDiv {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0rem;
      place-items: center;
      align-items: center;
      justify-content: center;
    }
  }
`;
