import { useNavigate } from "react-router-dom";
import { UniquePokemonData } from "../../interfaces/pokemonInterfaces";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { Text } from "../Text/Text";
import { TypeCard } from "../TypeCard/TypeCard";
import { Container } from "./styles";
import { Spacer } from "../Spacer/Spacer";
import { BackToTop } from "../BackToTop/BackToTop";
import { CaretRight, EyeSlash, Sparkle } from "phosphor-react";
import SimpleCardType from "../SimpleCardType/SimpleCardType";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import CustomChart from "../Chart/Chart";
import { CircleButton } from "../Button/CircleButton/CircleButton";
import { useState } from "react";
import addZeroes from "../../utils/addZeros";
import { Evolution } from "../../interfaces/evolutionInterface";
import EvolutionCard from "../EvolutionCard";

interface IUniquePokemonPage {
  data: UniquePokemonData | undefined;
  evolutions: {
    first: Evolution[] | undefined;
    second: Evolution[] | undefined;
    third: Evolution[] | undefined;
  };
}

export default function UniquePokemonPage({
  data,
  evolutions,
}: IUniquePokemonPage) {
  // Console log para mostrar os tipos do pokemon
  // console.log("damage relation:", data);
  const [shinySprite, setShinySprite] = useState<boolean>(false);

  if (data === undefined) {
    return null;
  }

  function checkimgIMG(url: string) {
    if (shinySprite) {
      if (url === null) {
        return data!.sprite_default;
      } else {
        return url;
      }
    } else {
      if (url === null) {
        return data!.sprite_default;
      } else {
        return url;
      }
    }
  }

  const navigate = useNavigate();
  return (
    <Container>
      <div className="spritesDiv">
        {shinySprite ? (
          <img
            src={checkimgIMG(data.official_artwork.shiny)}
            alt={`${data.name} image`}
          />
        ) : (
          <img
            src={checkimgIMG(data.official_artwork.default)}
            alt={`${data.name} image`}
          />
        )}
        <div className="switch-principal-sprite-wrapper">
          {shinySprite ? (
            <CircleButton
              onClick={() => setShinySprite(!shinySprite)}
              backgroundColor="white"
            >
              <Sparkle size={24} color={theme.colors.gray[800]} />
            </CircleButton>
          ) : (
            <CircleButton
              onClick={() => setShinySprite(!shinySprite)}
              backgroundColor="gray"
            >
              <Sparkle size={24} color={theme.colors.gray[100]} />
            </CircleButton>
          )}
        </div>
      </div>
      <div className="infoWrapper">
        <div className="pokedexInfo">
          <Text size="xxl" weight="bold" transform="capitalize" id="name">
            {data.name?.split("-").join(" ")}
          </Text>
          <Text size="xxl" transform="capitalize" id="id">
            #{addZeroes(data.id, 3)}
          </Text>
          <div className="typesWrapper">
            <div className="typesContainer">
              {data.types?.map((type) => {
                return (
                  <TypeCard
                    pressable={true}
                    pokemonType={type.type}
                    key={`${type.type}`}
                  />
                );
              })}
            </div>
          </div>
          <div className="flavorWrapper">
            <Text size="md">{data.flavor?.split("\f").join(" ")}</Text>
          </div>
        </div>
      </div>
      <Spacer />
      <div className="detailsWrapper">
        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Altura:
          </Text>
          <div className="info">
            <Text size="md">{(data.height * 0.1).toFixed(2)}m</Text>
          </div>
        </div>

        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Peso:
          </Text>
          <div className="info">
            <Text size="md">{(data.weight * 0.1).toFixed(2)}kg</Text>
          </div>
        </div>

        {data.abilities?.map((ability) => {
          return (
            <div
              key={ability.ability.name}
              className="infoCard"
              onClick={() => navigate(`/ability/${ability.ability.name}`)}
            >
              <Text size="md" transform="capitalize">
                Habilidade
              </Text>
              <div
                key={`${ability.ability.name}-${ability.slot}`}
                className="info"
              >
                <Text size="md" transform="capitalize" className="abilityName">
                  {ability.ability.name.split("-").join(" ")}
                </Text>
              </div>
            </div>
          );
        })}
      </div>

      <Spacer />
      <div className="statsWrapper">
        <span>Status base:</span>
        <div className="statsContainer">
          {data.stats?.map((stat) => {
            return (
              <div
                className="baseStatWrapper"
                key={`${stat.stat.name}-${stat.effort}`}
              >
                <Text size="md" transform="capitalize">
                  {stat.stat.name.split("-").join(" ")}
                </Text>
                <div className="baseStatDiv">
                  <div
                    style={{
                      width: `${stat.base_stat}%`,
                      maxWidth: "100%",
                      backgroundColor: `${theme.colors.primary[500]}`,
                      borderRadius: ".4rem",
                    }}
                  >
                    <Text size="md">{stat.base_stat}</Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Spacer />
      <div className="damage-relations">
        {data.damage_relation.double_damage_from.length === 0 ? null : (
          <div className="all-weakness">
            <Text size="md">Fraquezas:</Text>
            <div className="weakness">
              {data.damage_relation.double_damage_from.map((type) => {
                return (
                  <CustomTooltip title={type} key={type} arrow>
                    <div key={type}>
                      <SimpleCardType
                        pokemonType={type}
                        key={type}
                        double_damage_relation={false}
                      />
                    </div>
                  </CustomTooltip>
                );
              })}
            </div>
          </div>
        )}
        {data.damage_relation.double_damage_to.length === 0 ? null : (
          <div className="all-strengths">
            <Text size="md">Forças:</Text>
            <div className="strengths">
              <>
                {data.damage_relation.double_damage_to.map((type) => {
                  return (
                    <CustomTooltip title={type} arrow key={type}>
                      <div key={type}>
                        <SimpleCardType
                          double_damage_relation={false}
                          pokemonType={type}
                          key={type}
                        />
                      </div>
                    </CustomTooltip>
                  );
                })}
              </>
            </div>
          </div>
        )}
      </div>
      <Spacer />
      <div className="evolution-chain">
        <Text size="md">Cadeia evolutiva:</Text>
        <div className="evolutions">
          <div className="primary_evolution">
            {evolutions.first?.map((evolution) => {
              return (
                <EvolutionCard
                  key={evolution.name}
                  evolution={evolution}
                  shiny={shinySprite}
                />
              );
            })}
          </div>
          {evolutions.second && evolutions.second.length !== 0 ? (
            <>
              <CaretRight size={24} />
              <div
                className="second_evolution"
                style={{
                  display: evolutions.second.length === 1 ? "flex" : "grid",
                }}
              >
                {evolutions.second.map((evolution) => {
                  return (
                    <EvolutionCard
                      evolution={evolution}
                      shiny={shinySprite}
                      key={evolution.name}
                    />
                  );
                })}
              </div>
            </>
          ) : null}
          {evolutions.third && evolutions.third.length !== 0 ? (
            <>
              <CaretRight size={24} />
              <div
                className="third_evolution"
                style={{
                  display: evolutions.third.length === 1 ? "flex" : "grid",
                }}
              >
                {evolutions.third?.map((evolution) => {
                  return (
                    <EvolutionCard
                      evolution={evolution}
                      shiny={shinySprite}
                      key={evolution.name}
                    />
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
        <div className="switch-sprite-wrapper">
          {shinySprite ? (
            <CircleButton
              onClick={() => setShinySprite(!shinySprite)}
              backgroundColor="white"
            >
              <Sparkle size={24} color={theme.colors.gray[800]} />
            </CircleButton>
          ) : (
            <CircleButton
              onClick={() => setShinySprite(!shinySprite)}
              backgroundColor="gray"
            >
              <Sparkle size={24} color={theme.colors.gray[100]} />
            </CircleButton>
          )}
        </div>
      </div>

      <Spacer />

      <div className="gender-wrapper">
        <Text>Gender ratio</Text>
        <div className="gender-rate">
          {data.gender ? (
            <CustomChart female={data.gender.female} male={data.gender.male} />
          ) : null}
        </div>
      </div>
      <Spacer />

      <div className="backButton">
        <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
          <Button.Content text={"Voltar"} />
        </Button.Root>
      </div>
      <BackToTop />
    </Container>
  );

  // console.log("Evolution Chain", evolution_chain);

  // if (data.evolution_chain?.length == 3) {
  //   return (
  //     <Container>
  //       <div className="spritesDiv">
  //         {shinySprite ? (
  //           <img
  //             src={checkimgIMG(data.official_artwork.shiny)}
  //             alt={`${data.name} image`}
  //           />
  //         ) : (
  //           <img
  //             src={checkimgIMG(data.official_artwork.default)}
  //             alt={`${data.name} image`}
  //           />
  //         )}
  //         <div className="switch-principal-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>
  //       <div className="infoWrapper">
  //         <div className="pokedexInfo">
  //           <Text size="xxl" weight="bold" transform="capitalize" id="name">
  //             {data.name?.split("-").join(" ")}
  //           </Text>
  //           <Text size="lg" transform="capitalize" id="id">
  //             #{addZeroes(data.id, 3)}
  //           </Text>
  //           <div className="typesWrapper">
  //             <div className="typesContainer">
  //               {data.types?.map((type) => {
  //                 return (
  //                   <TypeCard
  //                     pressable={true}
  //                     pokemonType={type.type}
  //                     key={`${type.type}`}
  //                   />
  //                 );
  //               })}
  //             </div>
  //           </div>
  //           <div className="flavorWrapper">
  //             <Text size="md">{data.flavor?.split("\f").join(" ")}</Text>
  //           </div>
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="detailsWrapper">
  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Altura:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.height * 0.1).toFixed(2)}m</Text>
  //           </div>
  //         </div>

  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Peso:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.weight * 0.1).toFixed(2)}kg</Text>
  //           </div>
  //         </div>

  //         {data.abilities?.map((ability) => {
  //           return (
  //             <div
  //               key={ability.ability.name}
  //               className="infoCard"
  //               onClick={() => navigate(`/ability/${ability.ability.name}`)}
  //             >
  //               <Text size="md" transform="capitalize">
  //                 Habilidade
  //               </Text>
  //               <div
  //                 key={`${ability.ability.name}-${ability.slot}`}
  //                 className="info"
  //               >
  //                 {ability.is_hidden === true ? (
  //                   <div className="hidden_ability">
  //                     <CustomTooltip arrow title={"Hidden Ability"}>
  //                       <EyeSlash size={24} />
  //                     </CustomTooltip>
  //                   </div>
  //                 ) : null}
  //                 <Text
  //                   size="md"
  //                   transform="capitalize"
  //                   className="abilityName"
  //                 >
  //                   {ability.ability.name.split("-").join(" ")}
  //                 </Text>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>

  //       <Spacer />
  //       <div className="statsWrapper">
  //         <span>Status base:</span>
  //         <div className="statsContainer">
  //           {data.stats?.map((stat) => {
  //             return (
  //               <div
  //                 className="baseStatWrapper"
  //                 key={`${stat.stat.name}-${stat.effort}`}
  //               >
  //                 <Text size="md" transform="capitalize">
  //                   {stat.stat.name.split("-").join(" ")}
  //                 </Text>
  //                 <div className="baseStatDiv">
  //                   <div
  //                     style={{
  //                       width: `${stat.base_stat}%`,
  //                       maxWidth: "100%",
  //                       backgroundColor: `${theme.colors.primary[500]}`,
  //                       borderRadius: ".4rem",
  //                     }}
  //                   >
  //                     <Text size="md">{stat.base_stat}</Text>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="damage-relations">
  //         {data.damage_relation.double_damage_from.length === 0 ? null : (
  //           <div className="all-weakness">
  //             <Text size="md">Fraquezas:</Text>
  //             <div className="weakness">
  //               {data.damage_relation.double_damage_from.map((type) => {
  //                 return (
  //                   <CustomTooltip title={type} arrow key={type}>
  //                     <div>
  //                       <SimpleCardType
  //                         pokemonType={type}
  //                         key={type}
  //                         double_damage_relation={false}
  //                       />
  //                     </div>
  //                   </CustomTooltip>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         )}
  //         {data.damage_relation.double_damage_to.length === 0 ? null : (
  //           <div className="all-strengths">
  //             <Text size="md">Forças:</Text>
  //             <div className="strengths">

  //               {data.damage_relation.double_damage_to.map((type) => {
  //                 return (
  //                   <CustomTooltip key={type} title={type} arrow>
  //                     <div>
  //                       <SimpleCardType
  //                         key={type}
  //                         pokemonType={type}
  //                         double_damage_relation={false}
  //                       />
  //                     </div>
  //                   </CustomTooltip>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       <Spacer />
  //       <div className="evolution-chain">
  //         <Text size="md">Cadeia evolutiva:</Text>
  //         <div className="evolutions">
  //           <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[0].sprite.shiny}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[0].sprite.default}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[0].name}</span>
  //           </div>
  //           <div className="separator">
  //             <span>lv. {data.evolution_chain[1].min_level}</span>
  //             <CaretRight size={24} />
  //           </div>
  //           <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[1].sprite.shiny}
  //                 alt={`${data.evolution_chain[1].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[1].sprite.default}
  //                 alt={`${data.evolution_chain[1].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[1].name}</span>
  //           </div>
  //           <div className="separator">
  //             <span>lv. {data.evolution_chain[2].min_level}</span>
  //             <CaretRight size={24} />
  //           </div>
  //           <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[2].sprite.shiny}
  //                 alt={`${data.evolution_chain[2].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[2].sprite.default}
  //                 alt={`${data.evolution_chain[2].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[2].name}</span>
  //           </div>
  //         </div>
  //         <div className="switch-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>
  //       <Spacer />

  //       <div className="gender-wrapper">
  //         <Text>Gender ratio</Text>
  //         <div className="gender-rate">
  //           {data.gender ? (
  //             <CustomChart
  //               female={data.gender.female}
  //               male={data.gender.male}
  //             />
  //           ) : null}
  //         </div>
  //       </div>

  //       <Spacer />

  //       <div className="backButton">
  //         <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
  //           <Button.Content text={"Voltar"} />
  //         </Button.Root>
  //       </div>

  //       <BackToTop />
  //     </Container>
  //   );
  // } else if (data.evolution_chain?.length == 2) {
  //   return (
  //     <Container>
  //       <div className="spritesDiv">
  //         {shinySprite ? (
  //           <img
  //             src={checkimgIMG(data.official_artwork.shiny)}
  //             alt={`${data.name} image`}
  //           />
  //         ) : (
  //           <img
  //             src={checkimgIMG(data.official_artwork.default)}
  //             alt={`${data.name} image`}
  //           />
  //         )}
  //         <div className="switch-principal-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>
  //       <div className="infoWrapper">
  //         <div className="pokedexInfo">
  //           <Text size="xxl" weight="bold" transform="capitalize" id="name">
  //             {data.name?.split("-").join(" ")}
  //           </Text>
  //           <Text size="lg" transform="capitalize" id="id">
  //             #{addZeroes(data.id, 3)}
  //           </Text>
  //           <div className="typesWrapper">
  //             <div className="typesContainer">
  //               {data.types?.map((type) => {
  //                 return (
  //                   <TypeCard
  //                     pressable={true}
  //                     pokemonType={type.type}
  //                     key={`${type.type}`}
  //                   />
  //                 );
  //               })}
  //             </div>
  //           </div>
  //           <div className="flavorWrapper">
  //             <Text size="md">{data.flavor?.split("\f").join(" ")}</Text>
  //           </div>
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="detailsWrapper">
  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Altura:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.height * 0.1).toFixed(2)}m</Text>
  //           </div>
  //         </div>

  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Peso:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.weight * 0.1).toFixed(2)}kg</Text>
  //           </div>
  //         </div>

  //         {data.abilities?.map((ability) => {
  //           return (
  //             <div
  //               key={`${ability.ability.name}`}
  //               className="infoCard"
  //               onClick={() => navigate(`/ability/${ability.ability.name}`)}
  //             >
  //               <Text size="md" transform="capitalize">
  //                 Habilidade
  //               </Text>
  //               <div
  //                 key={`${ability.ability.name}-${ability.slot}`}
  //                 className="info"
  //               >
  //                 <Text
  //                   size="md"
  //                   transform="capitalize"
  //                   className="abilityName"
  //                 >
  //                   {ability.ability.name.split("-").join(" ")}
  //                 </Text>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>

  //       <Spacer />
  //       <div className="statsWrapper">
  //         <span>Status base:</span>
  //         <div className="statsContainer">
  //           {data.stats?.map((stat) => {
  //             return (
  //               <div
  //                 className="baseStatWrapper"
  //                 key={`${stat.stat.name}-${stat.effort}`}
  //               >
  //                 <Text size="md" transform="capitalize">
  //                   {stat.stat.name.split("-").join(" ")}
  //                 </Text>
  //                 <div className="baseStatDiv">
  //                   <div
  //                     style={{
  //                       width: `${stat.base_stat}%`,
  //                       maxWidth: "100%",
  //                       backgroundColor: `${theme.colors.primary[500]}`,
  //                       borderRadius: ".4rem",
  //                     }}
  //                   >
  //                     <Text size="md">{stat.base_stat}</Text>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="damage-relations">
  //         {data.damage_relation.double_damage_from.length === 0 ? null : (
  //           <div className="all-weakness">
  //             <Text size="md">Fraquezas:</Text>
  //             <div className="weakness">
  //               {data.damage_relation.double_damage_from.map((type) => {
  //                 return (
  //                   <CustomTooltip title={type} arrow key={type}>
  //                     <div key={type}>
  //                       <SimpleCardType
  //                         double_damage_relation={false}
  //                         pokemonType={type}
  //                         key={type}
  //                       />
  //                     </div>
  //                   </CustomTooltip>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         )}
  //         {data.damage_relation.double_damage_to.length === 0 ? null : (
  //           <div className="all-strengths">
  //             <Text size="md">Forças:</Text>
  //             <div className="strengths">
  //               <>
  //                 {data.damage_relation.double_damage_to.map((type) => {
  //                   return (
  //                     <CustomTooltip title={type} arrow key={type}>
  //                       <div key={type}>
  //                         <SimpleCardType
  //                           double_damage_relation={false}
  //                           pokemonType={type}
  //                           key={type}
  //                         />
  //                       </div>
  //                     </CustomTooltip>
  //                   );
  //                 })}
  //               </>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       <Spacer />
  //       <div className="evolution-chain">
  //         <Text size="md">Cadeia evolutiva:</Text>
  //         <div className="evolutions">
  //           <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[0].sprite.shiny}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[0].sprite.default}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[0].name}</span>
  //           </div>
  //           <div className="separator">
  //             <span>lv. {data.evolution_chain[1].min_level}</span>
  //             <CaretRight size={24} />
  //           </div>
  //           <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[1].sprite.shiny}
  //                 alt={`${data.evolution_chain[1].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[1].sprite.default}
  //                 alt={`${data.evolution_chain[1].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[1].name}</span>
  //           </div>
  //         </div>
  //         <div className="switch-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>

  //       <Spacer />

  //       <div className="gender-wrapper">
  //         <Text>Gender ratio</Text>
  //         <div className="gender-rate">
  //           {data.gender ? (
  //             <CustomChart
  //               female={data.gender.female}
  //               male={data.gender.male}
  //             />
  //           ) : null}
  //         </div>
  //       </div>

  //       <div className="backButton">
  //         <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
  //           <Button.Content text={"Voltar"} />
  //         </Button.Root>
  //       </div>
  //       <BackToTop />
  //     </Container>
  //   );
  // } else if (data.evolution_chain?.length == 1) {
  //   return (
  //     <Container>
  //       <div className="spritesDiv">
  //         {shinySprite ? (
  //           <img
  //             src={checkimgIMG(data.official_artwork.shiny)}
  //             alt={`${data.name} image`}
  //           />
  //         ) : (
  //           <img
  //             src={checkimgIMG(data.official_artwork.default)}
  //             alt={`${data.name} image`}
  //           />
  //         )}
  //         <div className="switch-principal-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>
  //       <div className="infoWrapper">
  //         <div className="pokedexInfo">
  //           <Text size="xxl" weight="bold" transform="capitalize" id="name">
  //             {data.name?.split("-").join(" ")}
  //           </Text>
  //           <Text size="xxl" transform="capitalize" id="id">
  //             #{addZeroes(data.id, 3)}
  //           </Text>
  //           <div className="typesWrapper">
  //             <div className="typesContainer">
  //               {data.types?.map((type) => {
  //                 return (
  //                   <TypeCard
  //                     pressable={true}
  //                     pokemonType={type.type}
  //                     key={`${type.type}`}
  //                   />
  //                 );
  //               })}
  //             </div>
  //           </div>
  //           <div className="flavorWrapper">
  //             <Text size="md">{data.flavor?.split("\f").join(" ")}</Text>
  //           </div>
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="detailsWrapper">
  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Altura:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.height * 0.1).toFixed(2)}m</Text>
  //           </div>
  //         </div>

  //         <div className="infoCard">
  //           <Text size="md" transform="capitalize">
  //             Peso:
  //           </Text>
  //           <div className="info">
  //             <Text size="md">{(data.weight * 0.1).toFixed(2)}kg</Text>
  //           </div>
  //         </div>

  //         {data.abilities?.map((ability) => {
  //           return (
  //             <div
  //               key={ability.ability.name}
  //               className="infoCard"
  //               onClick={() => navigate(`/ability/${ability.ability.name}`)}
  //             >
  //               <Text size="md" transform="capitalize">
  //                 Habilidade
  //               </Text>
  //               <div
  //                 key={`${ability.ability.name}-${ability.slot}`}
  //                 className="info"
  //               >
  //                 <Text
  //                   size="md"
  //                   transform="capitalize"
  //                   className="abilityName"
  //                 >
  //                   {ability.ability.name.split("-").join(" ")}
  //                 </Text>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>

  //       <Spacer />
  //       <div className="statsWrapper">
  //         <span>Status base:</span>
  //         <div className="statsContainer">
  //           {data.stats?.map((stat) => {
  //             return (
  //               <div
  //                 className="baseStatWrapper"
  //                 key={`${stat.stat.name}-${stat.effort}`}
  //               >
  //                 <Text size="md" transform="capitalize">
  //                   {stat.stat.name.split("-").join(" ")}
  //                 </Text>
  //                 <div className="baseStatDiv">
  //                   <div
  //                     style={{
  //                       width: `${stat.base_stat}%`,
  //                       maxWidth: "100%",
  //                       backgroundColor: `${theme.colors.primary[500]}`,
  //                       borderRadius: ".4rem",
  //                     }}
  //                   >
  //                     <Text size="md">{stat.base_stat}</Text>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <Spacer />
  //       <div className="damage-relations">
  //         {data.damage_relation.double_damage_from.length === 0 ? null : (
  //           <div className="all-weakness">
  //             <Text size="md">Fraquezas:</Text>
  //             <div className="weakness">
  //               {data.damage_relation.double_damage_from.map((type) => {
  //                 return (
  //                   <CustomTooltip title={type} key={type} arrow>
  //                     <div key={type}>
  //                       <SimpleCardType
  //                         pokemonType={type}
  //                         key={type}
  //                         double_damage_relation={false}
  //                       />
  //                     </div>
  //                   </CustomTooltip>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         )}
  //         {data.damage_relation.double_damage_to.length === 0 ? null : (
  //           <div className="all-strengths">
  //             <Text size="md">Forças:</Text>
  //             <div className="strengths">
  //               <>
  //                 {data.damage_relation.double_damage_to.map((type) => {
  //                   return (
  //                     <CustomTooltip title={type} arrow key={type}>
  //                       <div key={type}>
  //                         <SimpleCardType
  //                           double_damage_relation={false}
  //                           pokemonType={type}
  //                           key={type}
  //                         />
  //                       </div>
  //                     </CustomTooltip>
  //                   );
  //                 })}
  //               </>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       <Spacer />
  //       <div className="evolution-chain">
  //         <Text size="md">Cadeia evolutiva:</Text>
  //         <div className="evolutions">
  //           {/* <div className="evolution">
  //             {shinySprite ? (
  //               <img
  //                 src={data.evolution_chain[0].sprite.shiny}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             ) : (
  //               <img
  //                 src={data.evolution_chain[0].sprite.default}
  //                 alt={`${data.evolution_chain[0].name}`}
  //               />
  //             )}
  //             <span>{data.evolution_chain[0].name}</span>
  //           </div> */}
  //         </div>
  //         <div className="switch-sprite-wrapper">
  //           {shinySprite ? (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="white"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[800]} />
  //             </CircleButton>
  //           ) : (
  //             <CircleButton
  //               onClick={() => setShinySprite(!shinySprite)}
  //               backgroundColor="gray"
  //             >
  //               <Sparkle size={24} color={theme.colors.gray[100]} />
  //             </CircleButton>
  //           )}
  //         </div>
  //       </div>

  //       <Spacer />

  //       <div className="gender-wrapper">
  //         <Text>Gender ratio</Text>
  //         <div className="gender-rate">
  //           {data.gender ? (
  //             <CustomChart
  //               female={data.gender.female}
  //               male={data.gender.male}
  //             />
  //           ) : null}
  //         </div>
  //       </div>
  //       <Spacer />

  //       <div className="backButton">
  //         <Button.Root backgroundColor="delete" onClick={() => navigate(-1)}>
  //           <Button.Content text={"Voltar"} />
  //         </Button.Root>
  //       </div>
  //       <BackToTop />
  //     </Container>
  //   );
  // } else {
  //   return null;
  // }
}
