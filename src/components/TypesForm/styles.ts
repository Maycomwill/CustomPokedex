import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2.4rem;
  grid-row-gap: 1.2rem;
  place-items: center;

  @media (max-width: 500px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2.4rem;
    grid-row-gap: 1.2rem;
    place-items: center;
  }
`;
