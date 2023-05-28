import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.6rem 0;

  .types-wrapper {
    padding-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0rem;
    grid-row-gap: 1.6rem;
    place-items: center;
  }

  @media (max-width: 500px) {
    .types-wrapper{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 2.4rem;
      grid-row-gap: 1.2rem;
      place-items: center;
    }
  }
`;
