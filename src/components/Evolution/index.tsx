import { Evolution as EvolutionType } from "../../interfaces/evolutionInterface";

interface EvolutionProps {
  firstEvolution: EvolutionType[];
  secondEvolution?: EvolutionType[];
  thirdEvolution?: EvolutionType[];
}
function Evolution(props: EvolutionProps) {
  return <div>Evolution</div>;
}

export default Evolution;
