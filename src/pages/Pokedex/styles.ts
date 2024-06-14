import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .generationDiv {
    padding: 0rem 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .filtersWrapper {
    width: 90%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 2fr 1fr;

    @media (max-width: 500px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 3.6rem;
      margin-top: 2.4rem;
    }
  }

  .filtersDiv {
    display: flex;
    height: 100%;
  }

  .blankDiv {
    display: flex;
    flex: 1;
    height: 100%;
    @media (max-width: 500px) {
      display: none;
    }
  }

  .inputWrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      input {
        color: ${theme.colors.gray[100]};
        font-size: ${theme.fontSize.md};
        padding: 0.6rem 1.2rem;
        background-color: ${theme.colors.gray[700]};
        cursor: pointer;
        border: 0.2rem solid rgb(0 0 0 / 0);
        outline: none;
        border-radius: 0.4rem;
        margin-bottom: 0.4rem;

        ::placeholder {
          color: ${theme.colors.gray[400]};
        }

        :focus {
          cursor: text;
          border: 0.2rem solid ${theme.colors.primary[500]};
        }

        :target {
          scroll-margin-top: 0.8em;
        }
      }
    }

    @media (max-width: 500px) {
      justify-content: flex-start;
      padding: 0rem 0.4rem;
      form {
        width: 80%;
        font-size: 1.4rem;
      }
      form input {
        ::placeholder {
          font-size: 1.4rem;
        }
      }
    }
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

  @media (max-width: 500px) {
    align-items: center;
    justify-content: flex-start;
  }
`;
