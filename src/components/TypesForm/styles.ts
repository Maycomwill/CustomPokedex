import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1.6rem 0;

  .types-wrapper {
    display: flex;
    width: 100%;
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
      padding: 0 1.2rem;
      place-items: center;
    }
    .typesDiv {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;
