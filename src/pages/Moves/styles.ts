import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 2.4rem;
  padding-left: 6rem;
  padding-right: 6rem;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .effect-entries {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.2rem;
    @media (max-width: 500px) {
      flex-direction: column;
      width: 100%;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
    }
  }

  .attack-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    justify-content: center;
    gap: 1.2rem;
    @media (max-width: 500px) {
      padding-top: 2.4rem;
      flex-direction: column;
      width: 100%;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .progress-info {
    width: 100%;
    background-color: ${theme.colors.gray[600]};
    border-radius: 0.4rem;
    div span {
      padding: 0.4rem;
    }
  }

  .text-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3.6rem;
    width: 100%;
    @media (max-width: 500px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1.2rem;
      flex-wrap: wrap;
    }
  }

  .damage_class_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .pokemon {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .pokemonCard-wrapper {
    width: min(120rem, 97%);
    padding-top: 1.2rem;
    display: grid;
    gap: 1.2rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, minmax(5rem, 0.85fr));
    place-items: center;
    align-items: flex-start;

    @media (max-width: 500px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0rem 3.2rem;
    }
  }

  .backButton {
    width: 10rem;
    margin: auto;
    margin-top: 2.4rem;
    padding-bottom: 1.6rem;
  }
`;
