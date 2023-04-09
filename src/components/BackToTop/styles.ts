import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  background-color: gray;
  padding: 0.4rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 4rem;
  margin-bottom: 1.2rem;
  opacity: 0.2;
  cursor: pointer;
  border: 0.2rem solid rgb(0 0 0 / 0);

  :active {
    opacity: 0.4;
    border: 0.2rem solid ${theme.colors.yellow[500]};
  }

  @media (max-width: 500px){
    opacity: .6;
    margin-right: 1rem;
    margin-bottom: 1.6rem;

    :active {
    opacity: 0.8;
    border: 0.2rem solid ${theme.colors.yellow[500]};
  }
  }
`;
