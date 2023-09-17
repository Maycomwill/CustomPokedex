import styled from "styled-components";
import theme from "../../styles/theme";

interface IUniqueContainerProps {
  firstType?: string;
}

export const Container = styled.div<IUniqueContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2.4rem;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0rem 2rem;
    width: 100%;
    flex: 1;
    overflow-x: hidden;
  }

  .spritesDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .8rem;
  }

  .spritesDiv img {
    width: 30rem;
    height: 30rem;

    @media (max-width: 500px) {
      width: 18rem;
      height: 18rem;
    }
  }

  .infoWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   /*  @media (max-width: 500px) {
      flex-direction: column;
    } */
  }
    .pokedexInfo {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      gap: .4rem;


    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  .pokedexInfo #name{
    @media (min-width: 600px) {
    grid-area: 1 / 1 / 2 / 2;
    }
  }

  .pokedexInfo #id{
    @media (min-width: 600px) {
    grid-area: 2 / 1 / 3 / 2;
    }
  }

  .typesWrapper .typesContainer {
    width: 100%;
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4rem;
    margin: .4rem 0rem;
    @media (max-width: 500px) {
      align-items: flex-start;
      justify-content: center;
    }
  }

  .typesContainer {
    display: flex;
    gap: 1.6rem;
  }

  .flavorWrapper{
    grid-area: 3 / 1 / 4 / 3;
    text-align: justify;
  }

  .detailsWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: .8rem;
    grid-column-gap: .8rem;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .detailsWrapper .info{
    background: ${theme.colors.gray[800]};
    padding: 1.2rem 0rem;
    border: .2rem solid ${theme.colors.gray[500]};
    border-radius: .8rem;
    width: 100%;
    display: flex;
    flex:1;
    align-content: center;
    justify-content: center;
  }

  .detailsWrapper .info:hover span{
      color: ${theme.colors.primary[500]};
  }

  .detailsWrapper .info:has(.abilityName) {
    cursor: pointer;
  }

  .abilities {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3.2rem;

    @media (max-width: 500px) {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  .baseStatDiv {
    width: 100%;
    background-color: ${theme.colors.gray[600]};
    border-radius: 0.4rem;
    div span {
      padding: 0.4rem;
    }
  }

  .statsWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span{
      font-size: 1.6rem;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .statsContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
    place-items: center;
    grid-gap: 1.6rem;
    padding: 0 2.4rem;

    @media (max-width: 500px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(10rem, 1fr));
      grid-gap: 1.6rem;
      padding: 0 0.2rem;
    }
  }

  .damage-relations{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .8rem;

    .all-weakness, .all-strengths{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      gap: .4rem;
    }

    .weakness, .strengths{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .6rem
    }

  }

  .baseStatWrapper {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    padding-top: 0.8rem;
  }

  .evolution-chain{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;

    .evolutions{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }

    .separator{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: 3.6rem;
    }
  }

  .evolution{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      padding: 0;
      margin: 0;
      width: 9.6rem;
    }

    span{
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }

  .backButton {
    width: 10rem;
    margin: auto;
    margin-top: 2.4rem;
  }
`;
