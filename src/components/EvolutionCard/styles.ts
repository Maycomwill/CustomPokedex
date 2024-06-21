import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  min-height: 16.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${theme.colors.accent[200]};
  border-radius: 0.8rem;
  padding: 0.4rem 0.2rem;
  background-color: rgb(255 255 255/0);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgb(255 255 255/0.1);
    border-color: ${theme.colors.primary[500]};
    cursor: pointer;
  }
`;

export const Trigger = styled.div`
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .spacer {
    min-width: 3rem;
    min-height: 3rem;
    background-color: transparent;
  }

  .level-up,
  .min_effect {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
`;
