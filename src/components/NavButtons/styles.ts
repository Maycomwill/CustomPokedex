import styled from "styled-components";

export const Container = styled.div`
  .navButtons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    place-items: center;
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    gap: 1.6rem;
  }

  .navButtons Button {
    width: 100%;
    height: 100%;
  }

  #zeroGen {
    color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    cursor: auto;

    :hover {
      background-color: rgba(0, 0, 0, 0);
    }

    :focus {
      border: 0.2rem solid rgba(0, 0, 0, 0);
    }
  }

  @media (max-width: 500px) {
    .navButtons {
      gap: 1rem;
    }
    .navButtons Button {
      width: 100%;
      height: 100%;
    }
  }
`;
