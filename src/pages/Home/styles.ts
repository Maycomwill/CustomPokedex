import styled from "styled-components";

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
    padding: 1.6rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-bar > form {
    display: flex;
    gap: 1.2rem;
  }

  .regions-wrapper {
    width: 100%;
    text-align: center;
  }
  form {
    width: 100%;
  }
  form > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (max-width: 500px) {

    .search-bar > form {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .search-bar > form > input {
      width: 100%;
    }

    .search-bar > form > button {
      width: 50%;
    }

    form {
      padding: 0rem 1.2rem;
    }

    form > div {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`;
