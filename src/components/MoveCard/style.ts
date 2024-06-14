import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray[700]};
  padding: 0.8rem 2.4rem;
  width: 100%;
  height: 6.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  transition: background-color 0.25s ease-in-out;

  :hover {
    background-color: ${theme.colors.gray[600]};
  }
`;
