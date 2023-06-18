import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  background-color: ${theme.colors.gray[500]};
  padding: 0.4rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 2%;
  opacity: 0.2;
  cursor: pointer;
  border: 0.2rem solid rgb(0 0 0 / 0);

  :active {
    opacity: 0.4;
    border: 0.2rem solid ${theme.colors.primary[500]};
  }

  :hover {
    background-color: ${theme.colors.gray[600]};
  }

  @media (max-width: 500px) {
    opacity: 0.6;
    bottom: 3.2rem;
    right: 2rem;

    :active {
      opacity: 0.8;
      border: 0.2rem solid ${theme.colors.primary[500]};
    }
    :hover {
      background-color: ${theme.colors.gray[600]};
    }
  }
`;
