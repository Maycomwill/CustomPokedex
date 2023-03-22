import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .pokemonCard-wrapper{

    width: min(120rem, 97%);
    margin: auto;
    padding-top: 1.2rem;
    display: grid;
    gap: 1.2rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, minmax(5rem, .85fr));
    place-items: center;

    @media (max-width: 500px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  };

  .generationDiv{
    padding: 0rem 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
  };

  .backButton{
    width: 10rem;
    margin: auto;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }
`;
