import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1.6rem 0;

  .types-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
    width: 50%;
  }

  .typesDiv {
    width: 100%;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    align-items: center;
  }

  @media (max-width: 500px) {
    .typesDiv {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: .2rem;
      place-items: center;
      align-items: center;
      justify-content: center;
    }
    .types-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 3.6rem;
      place-items: center;
    }
  }
`;
