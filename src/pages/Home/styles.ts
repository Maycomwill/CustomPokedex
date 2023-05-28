import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 1.2rem;

  .search-bar {
    width: 100%;
    padding: 1.2rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: dropDown 1s ease backwards;
  }

  .search-form {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    width: 70%;
  }

  .search-input {
    padding: 0.9rem 1.6rem;
    width: 100%;
    outline: none;
    border: 0.1rem solid rgba(0, 0, 0, 0);
    font-size: 1.6rem;
    color: ${theme.colors.gray[100]};
    text-align: center;
    border-radius: 0.4rem;
    background-color: ${theme.colors.gray[600]};

    :focus-within {
      border: 0.1rem solid ${theme.colors.primary[500]};
    }
    ::placeholder {
      font-size: 1.6rem;
      text-align: center;
      color: ${theme.colors.gray[400]};
    }
  }

  .search-button-wrapper {
    display: block;
  }

  .regions-wrapper {
    width: 100%;
    text-align: center;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  @keyframes dropDown {
    0% {
      transform: translateY(-2rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0rem);
      opacity: 100;
    }
  }

  @media (max-width: 500px) {
    .search-form {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .search-form > input {
      width: 100%;
      ::placeholder {
        font-size: 1.4rem;
      }
    }

    .search-form > button {
      width: 50%;
    }
  }
`;
