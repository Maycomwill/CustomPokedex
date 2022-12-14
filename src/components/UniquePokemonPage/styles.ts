import styled from 'styled-components';
import theme from '../../styles/theme';
import { backgroundColorType } from '../PokemonCard/styles'

interface IUniqueContainerProps {
  firstType?: string
}


export const Container = styled.div<IUniqueContainerProps>`
  padding: 2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 95%;
  border-radius: 1.6rem;
  justify-content: space-evenly;
  align-items: flex-start;
  background: ${theme.colors.gray[800]};

.infoWrapper{
  display: flex;
  flex-direction: column;
  gap: .8rem;

  .pokedexInfo{
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }
};

.spritesDiv{
  display: flex;
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
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

`;
