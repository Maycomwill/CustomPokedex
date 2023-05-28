import styled from "styled-components";
import kanto from "../../assets/regions/kanto.png";
import johto from "../../assets/regions/johto.png";
import hoenn from "../../assets/regions/hoenn.png";
import sinnoh from "../../assets/regions/sinnoh.png";
import unova from "../../assets/regions/unova.png";
import kalos from "../../assets/regions/kalos.png";
import alola from "../../assets/regions/alola.png";
import galar from "../../assets/regions/galar.png";
import paldea from "../../assets/regions/paldea.png";

interface ContainerProps {
  region: string;
}

function handlerRegionPicture(region: string) {
  switch (region) {
    case "kanto":
      return kanto;

    case "johto":
      return johto;

    case "hoenn":
      return hoenn;

    case "sinnoh":
      return sinnoh;

    case "unova":
      return unova;

    case "alola":
      return alola;

    case "galar":
      return galar;

    case "kalos":
      return kalos;

    case "paldea":
      return paldea;

    default:
      return;
  }
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  background-image: url(${({ region }) => handlerRegionPicture(region)});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  position: relative;
  width: 100%;
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: 0rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.25);
  box-shadow: 0rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.25);

  :hover {
    filter: brightness(80%);
  }

  #filter {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 0rem 1.2rem;
    z-index: 1;
  }

  span {
    z-index: 1;
    text-transform: capitalize;
  }
`;
