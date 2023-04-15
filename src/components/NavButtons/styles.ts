import styled from "styled-components";

export const Container = styled.div`
  .navButtons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
  }

  .navButtons Button {
    max-width: 10%;
  }

  #zeroGen {
    color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    cursor: auto;


  :hover{
    background-color: rgba(0, 0, 0, 0)
  };


  :focus {
      border: .2rem solid rgba(0, 0, 0, 0);
  }
  }
`;
