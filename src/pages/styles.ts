import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  #routes{
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  };
`;
