import { Container } from "./styles";
import { Text } from "../Text/Text";
import { TypeCard } from "../TypeCard/TypeCard";

export function TypesForm() {
  return (
    <Container>
      <div className="text-wrapper">
        <Text>Você pode filtrar os pokemon por tipos</Text>
      </div>
      <div className="types-wrapper">
        <div className="typesDiv">
          <TypeCard pokemonType="bug" pressable />
          <TypeCard pokemonType="dark" pressable />
          <TypeCard pokemonType="dragon" pressable />
          <TypeCard pokemonType="electric" pressable />
          <TypeCard pokemonType="fairy" pressable />
          <TypeCard pokemonType="fighting" pressable />
          <TypeCard pokemonType="fire" pressable />
          <TypeCard pokemonType="flying" pressable />
          <TypeCard pokemonType="ghost" pressable />
          <TypeCard pokemonType="grass" pressable />
          <TypeCard pokemonType="ground" pressable />
          <TypeCard pokemonType="ice" pressable />
          <TypeCard pokemonType="normal" pressable />
          <TypeCard pokemonType="poison" pressable />
          <TypeCard pokemonType="psychic" pressable />
          <TypeCard pokemonType="rock" pressable />
          <TypeCard pokemonType="steel" pressable />
          <TypeCard pokemonType="water" pressable />
        </div>
      </div>
    </Container>
  );
}
