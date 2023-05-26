import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .8rem 0;

  span>a{
    text-decoration: none;
    color: ${theme.colors.gray[100]}
  }
`;
