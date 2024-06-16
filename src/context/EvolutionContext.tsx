import { createContext, ReactNode, useState } from "react";
import axios from "axios";
import {
  ChainLink,
  Evolution,
  PrincipalEvolutionChain,
} from "../interfaces/evolutionInterface";
import { pokeapi } from "../services/api";

export interface EvolutionContextProps {
  getEvolutionChainData: (url: string) => void;
  firstEvolution: Evolution[] | undefined;
  secondEvolution: Evolution[] | undefined;
  thirdEvolution: Evolution[] | undefined;
}

export const EvolutionContext = createContext({} as EvolutionContextProps);

export function EvolutionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [firstEvolution, setFirstEvolution] = useState<Evolution[]>([]);
  const [secondEvolution, setSecondEvolution] = useState<Evolution[]>([]);
  const [thirdEvolution, setThirdEvolution] = useState<Evolution[]>([]);

  async function getEvolutionChainData(url: string) {
    const { data }: { data: PrincipalEvolutionChain } = await axios.get(url);
    //First Evolution
    evolution(data.chain).then((response) => {
      setFirstEvolution([response]);
    });

    //Second Evolution
    let secondEvolutionArray: Evolution[] = [];
    data.chain.evolves_to.map((_evolution) => {
      evolution(_evolution)
        .then((response) => {
          secondEvolutionArray.push(response);
        })
        .then(() => {
          setSecondEvolution(secondEvolutionArray);
        });
    });

    let thirdEvolutionArray: Evolution[] = [];
    data.chain.evolves_to.map((_evolution) => {
      _evolution.evolves_to.map((_thirdEvolution) => {
        evolution(_thirdEvolution)
          .then((response) => {
            thirdEvolutionArray.push(response);
          })
          .then(() => {
            setThirdEvolution(thirdEvolutionArray);
          });
      });
    });
  }

  async function evolution(chain: ChainLink) {
    let sprite = await getSprite(chain.species.name);
    return {
      name: chain.species.name,
      sprite,
      details: chain.evolution_details,
    };
  }

  async function getSprite(pokemon: string) {
    const { data } = await pokeapi.get(`/pokemon/${pokemon}`);

    return data.sprites.front_default;
  }

  return (
    <EvolutionContext.Provider
      value={{
        getEvolutionChainData,
        firstEvolution,
        secondEvolution,
        thirdEvolution,
      }}
    >
      {children}
    </EvolutionContext.Provider>
  );
}
