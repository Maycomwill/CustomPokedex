import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { RegionCard } from "../../components/RegionCard/RegionCard";
import { TextStyled } from "../../components/Text/styles";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      {/* <Form /> */}
      <div className="search-bar">
        <form action="">
          <input type="text" placeholder="Busque um pokemon pelo nome ou id"/>
          <Button text="Buscar" />
        </form>
      </div>
      <div className="regions-wrapper">
        <div>
          <TextStyled>Navege pelas regiões do mundo pokemon:</TextStyled>
          <form action="">
            <div>
              <RegionCard region={{ region_name: "kanto", number: 1 }} />

              <RegionCard region={{ region_name: "johto", number: 2 }} />

              <RegionCard region={{ region_name: "hoenn", number: 3 }} />

              <RegionCard region={{ region_name: "sinnoh", number: 4 }} />

              <RegionCard region={{ region_name: "unova", number: 5 }} />

              <RegionCard region={{ region_name: "kalos", number: 6 }} />

              <RegionCard region={{ region_name: "alola", number: 7 }} />

              <RegionCard region={{ region_name: "galar", number: 8 }} />

              <RegionCard region={{ region_name: "paldea", number: 9 }} />
            </div>
          </form>
        </div>
        <div></div>
        <div></div>
      </div>

    </Container>
  );
}
