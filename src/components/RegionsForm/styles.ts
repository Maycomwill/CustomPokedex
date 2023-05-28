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
  animation: upSurge 1s .2s ease-out backwards;
  animation-delay: 1s;

  .card-wrapper {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 6.4rem;
    grid-row-gap: 1.2rem;
  }

  .card-wrapper > div{
    display: flex;
    gap: 6.4rem;
    width: 100%;
  }


  @media (max-width: 500px) {
    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }


  @keyframes upSurge {
    0% {
      transform: translateY(4rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0rem);
      opacity: 100;
    }
  }

`;
