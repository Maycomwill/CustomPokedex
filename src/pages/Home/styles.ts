import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .4rem 1.2rem;

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

  .input-wrapper{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.6rem;
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
  }

  .input-icon-wrapper{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    padding: 0rem 1.6rem;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 1.6rem;
    color: ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[600]};

    ::placeholder {
      font-size: 1.6rem;
      text-align: left;
      color: ${theme.colors.gray[400]};
    }
  }

  .search-button-wrapper {
    display: block;
  }

  .regions-wrapper, .filters-wrapper {
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

  .types-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.2rem;
  }

  .types-wrapper, .regions-wrapper, .spacer1, .spacer2 {
    animation: upSurge 1s 0.2s ease-out backwards;
  }

  .filters-wrapper div:nth-child(1) {
    animation-delay: 0.2s;
  }
  .filters-wrapper div:nth-child(2) {
    animation-delay: 0.4s;
  }
  .filters-wrapper div:nth-child(3) {
    animation-delay: 0.6s;
  }
  .filters-wrapper div:nth-child(4) {
    animation-delay: 0.8s;
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

  @keyframes upSurge {
    0% {
      transform: translateY(4rem);
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

    .filters-wrapper {
      width: 95%;
    }
  }
`;
