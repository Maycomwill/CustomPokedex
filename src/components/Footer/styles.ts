import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem .8rem;

  span > a {
    text-decoration: none;
    color: ${theme.colors.gray[100]};
  }

  @media (max-width: 500px) {
    span > a {
      font-size: 1.4rem;
    }
  }
`;
