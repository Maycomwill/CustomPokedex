import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .spacer {
    width: 100%;
    height: 0.1rem;
    background-color: ${theme.colors.primary[500]};
    margin: 1.2rem 0;
  }
`;
