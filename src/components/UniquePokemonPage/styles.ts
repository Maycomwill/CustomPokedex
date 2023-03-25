import styled from 'styled-components';
import theme from '../../styles/theme';
import { backgroundColorType } from '../PokemonCard/styles'

interface IUniqueContainerProps {
  firstType?: string
}

export const Container = styled.div<IUniqueContainerProps>`
  padding: 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 95%;
  border-radius: 1.6rem;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.colors.gray[800]};
  margin-bottom: 2.4rem;

  @media (max-width: 500px){
    flex-direction: column;
    padding: 2rem;
    width: 90%;
    overflow-x: hidden;
  };

.infoWrapper{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify: center;
  gap: .8rem;
  margin-bottom: 2.4rem;

  @media (max-width: 500px){
    flex-direction: column;
  }

  .pokedexInfo{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    place-items: center;
    grid-gap: .4rem;

    @media (max-width: 500px){
      display: grid;
      grid-template-columns: repeat(2, minmax(10rem, 1fr));
      grid-gap: .8rem;
      width: 100%;
      margin: auto;
    }
  }
};

.spritesDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.4rem
};

.typesWrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .4rem;
};

.typesContainer{
  display: flex;
  gap: .4rem;
};

.abilitiesContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px){
    text-align: center;
    width: 100%;
    margin-bottom: 2rem
  }
}

.abilities{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.2rem;


  @media (max-width: 500px){
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}

.baseStatDiv{
  width: 100%;
  background-color: ${theme.colors.gray[600]};
  border-radius: .4rem;
  div span{
    padding: .4rem;
  }

}

.statsWrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px){
    width: 100%;
  }
}

.statsContainer{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  place-items: center;
  grid-gap: 1.6rem;
  padding: 0 2.4rem;


  @media (max-width: 500px){
    display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    grid-gap: 1.6rem;
    padding: 0 0.2rem
  }
}

.baseStatWrapper{
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: .2rem;
  padding-top: .8rem;
  }

  .backButton{
    width: 10rem;
    margin: auto;
    margin-top: 2.4rem;
  }

`;
