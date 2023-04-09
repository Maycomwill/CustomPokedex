import styled from 'styled-components';
import theme from '../../styles/theme';

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

  .inputWrapper{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    form{
      display: flex;
      flex-direction: column;
      gap: .4rem;

      input{
        color: ${theme.colors.gray[100]};
        font-size: ${theme.fontSize.md};
        padding: .6rem 1.2rem;
        background-color: ${theme.colors.gray[700]};
        cursor: pointer;
        border: .2rem solid rgb(0 0 0 / 0);
        outline: none;
        border-radius: .4rem;
        margin-bottom: .4rem;

        ::placeholder{
          color: ${theme.colors.gray[400]};
        }

        :focus{
          cursor: text;
          border: .2rem solid ${theme.colors.yellow[500]};
        }
      }
    }

    @media (max-width: 500px){
      margin-top: 2.4rem;
    }
  }

  .backButton{
    width: 10rem;
    margin: auto;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }
`;
