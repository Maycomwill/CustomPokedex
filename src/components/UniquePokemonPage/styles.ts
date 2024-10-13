import styled from "styled-components";
import theme from "../../styles/theme";
interface IUniqueContainerProps {
  firstType?: string;
}

export const Container = styled.div<IUniqueContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2.4rem;
  padding-left: 6rem;
  padding-right: 6rem;
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
    margin-bottom: 0.8rem;
    position: relative;
    width: 100%;
  }

  .switch-principal-sprite-wrapper {
    position: absolute;
    top: 0%;
    right: 2%;
  }

  .forms-wrapper {
    position: absolute;
    bottom: 0%;
    right: 2%;
    width: 14rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    #formSprite {
      width: 12rem;
      height: 12rem;
    }

    select {
      width: 100%;
      color: ${theme.colors.gray[100]};
      background-color: ${theme.colors.gray[800]};
      border-radius: 0.2rem;
      padding: 0.2rem 0.4rem;

      option {
        text-transform: capitalize;
      }
    }

    @media (max-width: 800px) {
      right: 0%;
      width: 9.6rem;
      height: 9.6rem;
      #formSprite {
        width: 8.2rem;
        height: 8.2rem;
      }
    }
    @media (max-width: 500px) {
      right: 2%;
      width: 7.2rem;
      height: 7.2rem;
      #formSprite {
        width: 6.2rem;
        height: 6.2rem;
      }
    }
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
  }
  .pokedexInfo {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 0.4rem;

    @media (min-width: 500px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding: 0rem 2rem;
      align-items: flex-start;
      justify-content: center;
    }
  }

  .pokedexInfo #name {
    text-align: center;
    @media (min-width: 500px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  .pokedexInfo #id {
    text-align: center;
    @media (min-width: 500px) {
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
    margin: 0.4rem 0rem;
    @media (max-width: 500px) {
      align-items: flex-start;
      justify-content: center;
    }
  }

  .typesContainer {
    display: flex;
    gap: 1.6rem;
  }

  .flavorWrapper {
    grid-area: 3 / 1 / 4 / 3;
    text-align: justify;
  }

  .detailsWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 0.8rem;
    grid-column-gap: 0.8rem;
    width: 100%;
    @media (min-width: 500px) {
      width: 70%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 3.2rem;
      padding: 0rem 2rem;
    }
  }

  .detailsWrapper .info {
    background: ${theme.colors.gray[800]};
    padding: 1.2rem 0rem;
    border: 0.2rem solid ${theme.colors.gray[500]};
    border-radius: 0.8rem;
    width: 100%;
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
  }

  .detailsWrapper .info:has(.abilityName):hover span {
    color: ${theme.colors.primary[500]};
  }

  .detailsWrapper .info:has(.abilityName) {
    cursor: pointer;
  }
  .info {
    position: relative;
  }

  .hidden_ability {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    opacity: 20%;
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

  .statsWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span {
      font-size: 1.6rem;
    }

    @media (min-width: 500px) {
      width: 70%;
      padding: 0rem 2rem;
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

  .statsContainer {
    width: 100%;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    grid-gap: 1.6rem;

    @media (min-width: 500px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(10rem, 1fr));
      column-gap: 1.2rem;
      grid-gap: 1.6rem;
      margin: 0px auto;
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

  .damage-relations {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 500px) {
      width: 70%;
      gap: 4.2rem;
      flex-direction: row;
      padding: 2rem 2rem;
    }

    .all-weakness,
    .all-strengths {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      gap: 0.4rem;
    }

    .weakness,
    .strengths {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
    }
  }

  .evolution-chain {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    @media (min-width: 500px) {
      gap: 2.4rem;
      width: 70%;
      padding: 1.2rem 2rem;
    }

    .evolutions {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 2.4rem;

      @media (min-width: 500px) {
        justify-content: center;
        gap: 2rem;
      }
    }

    .primary_evolution {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      justify-content: center;
    }

    .second_evolution {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.4rem;
      align-items: center;
      justify-content: center;
    }

    .third_evolution {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .switch-sprite-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .separator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: 3.6rem;
    }
  }

  .evolution {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      padding: 0;
      margin: 0;
      width: 9.6rem;
    }

    span {
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }

  .gender-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .backButton {
    width: 10rem;
    margin: auto;
    margin-top: 2.4rem;
  }

  .TooltipContent {
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: red;
    background-color: white;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  .TooltipContent[data-state="delayed-open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  .TooltipArrow {
    fill: white;
  }

  .IconButton {
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: violet;
    background-color: white;
    box-shadow: 0 2px 10px violet;
  }
  .IconButton:hover {
    background-color: violet;
  }
  .IconButton:focus {
    box-shadow: 0 0 0 2px black;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
