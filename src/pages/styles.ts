import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  scroll-behavior: smooth;

  #header{
    flex: 0;
  }

  #routes{
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  };

  #footer{
    flex: 0;
  }
`;
