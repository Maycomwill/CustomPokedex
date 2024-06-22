import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 1.2rem;
  gap: .8rem;


  .card-wrapper {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 6.4rem;
    grid-row-gap: 1.2rem;
    place-items: center;
  }

  .card-wrapper > div{
    display: flex;
    gap: 6.4rem;
    width: 100%;
  }

  @media (max-width: 1280px){
    .card-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 860px) {
    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`;
