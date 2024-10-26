import { useNavigate } from 'react-router-dom';
import { UniquePokemonData } from '../../interfaces/pokemonInterfaces';
import theme from '../../styles/theme';
import { TypeCard } from '../TypeCard/TypeCard';
import { Spacer } from '../Spacer/Spacer';
import { BackToTop } from '../BackToTop/BackToTop';
import { CaretRight, Sparkle } from 'phosphor-react';
import SimpleCardType from '../SimpleCardType/SimpleCardType';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import CustomChart from '../Chart/Chart';
import { useState } from 'react';
import addZeroes from '../../utils/addZeros';
import { Evolution } from '../../interfaces/evolutionInterface';
import EvolutionCard from '../EvolutionCard/EvolutionCard';
import { FormDataSchema } from '../../interfaces/formInterfaces';
import { Button } from '../ui/button';
import clsx from 'clsx';
import { RadarChart } from '../RadarChart/RadarChart';

interface IUniquePokemonPage {
  data: UniquePokemonData | undefined;
  forms: FormDataSchema[];
  evolutions: {
    first: Evolution[] | undefined;
    second: Evolution[] | undefined;
    third: Evolution[] | undefined;
  };
}

export default function UniquePokemonPage({
  data,
  evolutions,
  forms,
}: IUniquePokemonPage) {
  // Console log para mostrar os tipos do pokemon
  // console.log("damage relation:", data);
  const [shinySprite, setShinySprite] = useState<boolean>(false);
  const [selectForm, setSelectForm] = useState<number>(-1);

  if (data === undefined) {
    return null;
  }

  function handleStatsBar(value: number) {
    const total = 255;
    const newValue = (value * 100) / total;
    return `${newValue}%`;
  }

  function handleFormSprite() {
    const form = forms[selectForm];

    if (selectForm === -1) {
      if (shinySprite) {
        return forms[0].sprites.default.shiny
          ? forms[0].sprites.default.shiny
          : forms[0].sprites.default.shiny;
      }
      return forms[0].sprites.default.default
        ? forms[0].sprites.default.default
        : forms[0].sprites.default.default;
    }
    if (shinySprite) {
      return form.sprites.default.shiny
        ? form.sprites.default.shiny
        : form.sprites.default.shiny;
    }
    return form.sprites.default.default
      ? form.sprites.default.default
      : form.sprites.default.default;
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
    <div className="mb-6 flex w-full flex-1 flex-col items-center justify-evenly overflow-x-hidden px-8 lg:w-[70%] lg:px-24">
      <div className="relative mb-2 flex w-full flex-col items-center justify-center">
        {/* Shiny Sprite button */}
        <div className="absolute right-[2%] top-0">
          {shinySprite ? (
            <Button
              className="h-auto w-auto rounded-full bg-white p-2 transition-all duration-200 ease-in-out md:p-4"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle className="size-6 text-gray-800 md:size-6" />
            </Button>
          ) : (
            <Button
              className="h-auto w-auto rounded-full bg-gray-800 p-2 transition-all duration-200 ease-in-out md:p-4"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle className="size-6 text-gray-100 md:size-6" />
            </Button>
          )}
        </div>

        {/* Default Sprite */}
        {shinySprite ? (
          <img
            className="size-52 lg:size-80"
            src={checkimgIMG(data.official_artwork.shiny)}
            alt={`${data.name} image`}
          />
        ) : (
          <img
            className="size-52 lg:size-80"
            src={checkimgIMG(data.official_artwork.default)}
            alt={`${data.name} image`}
          />
        )}
      </div>

      <div className="flex w-full flex-col items-center justify-start space-y-2 md:flex-row md:items-start md:space-y-0">
        <div className="flex w-full flex-col justify-center space-y-2">
          <h1 className="text-center text-4xl font-semibold capitalize md:text-left">
            {data.name?.split('-').join(' ')}
          </h1>
          <div className="flex w-full flex-col items-center justify-center space-y-2 md:items-start">
            <h2 className="text-2xl capitalize">#{addZeroes(data.id, 3)}</h2>
            <p className="text-justify text-base md:w-[90%]">
              {data.flavor?.split('\f').join(' ')}
            </p>
          </div>
          <div className="my-1 flex w-full items-start justify-center gap-2 md:justify-start">
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

        {/* Forms sprite selector */}
        {forms && forms.length > 1 ? (
          <div className="flex w-56 flex-col items-center justify-start gap-3">
            <p>Variações do Pokémon</p>
            <img
              id="formSprite"
              className="size-24 lg:size-32"
              src={handleFormSprite()}
              alt="Form Sprite"
            />
            <select
              className="w-full rounded-md bg-gray-800 px-1 py-2 text-white"
              onChange={(e) => setSelectForm(Number(e.target.value))}
              id="formSelectInput"
            >
              <option className="capitalize" value={-1}>
                Select form
              </option>
              {forms &&
                forms.map((form, index) => {
                  return (
                    <option key={`${form.name}-${index}`} value={index}>
                      {form.name.split('-').join(' ')}
                    </option>
                  );
                })}
            </select>
          </div>
        ) : null}
      </div>

      <Spacer />

      {/* Info */}
      <div className="grid w-full grid-cols-2 gap-x-8 lg:w-[80%] lg:px-8">
        <div className="infoCard">
          <span className="text-base capitalize">Altura:</span>

          <div className="flex flex-1 items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3">
            <span className="text-base">{(data.height * 0.1).toFixed(2)}m</span>
          </div>
        </div>

        <div className="infoCard">
          <span className="text-base capitalize">Peso:</span>
          <div className="flex flex-1 items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3">
            <span className="text-base">
              {(data.weight * 0.1).toFixed(2)}kg
            </span>
          </div>
        </div>

        {data.abilities?.map((ability) => {
          return (
            <div
              key={ability.ability.name}
              className="infoCard"
              onClick={() => navigate(`/ability/${ability.ability.name}`)}
            >
              <span className="text-base capitalize">Habilidade:</span>
              <div
                key={`${ability.ability.name}-${ability.slot}`}
                className="relative flex flex-1 cursor-pointer items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3 transition-all duration-200 ease-in-out hover:border-primary-500"
              >
                <span className="text-base capitalize">
                  {ability.ability.name.split('-').join(' ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Spacer />

      {/* Stats */}
      <div className="flex w-full flex-col items-start justify-center md:w-full lg:w-[80%] lg:px-8">
        <RadarChart data={data.chart_data} />
        {/* <span className="text-lg">Status base:</span>

        <div className="mx-auto grid w-full grid-cols-2 place-items-center gap-4 gap-x-3">
          {data.stats?.map((stat) => {
            return (
              <div
                className="m-auto flex w-full flex-col items-start justify-center gap-1 pt-2"
                key={`${stat.stat.name}-${stat.effort}`}
              >
                <span className="text-base capitalize">
                  {stat.stat.name.split('-').join(' ')}
                </span>

                <div className="w-full rounded-md bg-gray-600">
                  <div
                    style={{
                      width: handleStatsBar(stat.base_stat),
                      maxWidth: '100%',
                      backgroundColor: `${theme.colors.primary[500]}`,
                      borderRadius: '.4rem',
                    }}
                  >
                    <span className="text-base capitalize">
                      {stat.base_stat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      <Spacer />

      {/* Damage Relation */}
      <div className="flex w-full flex-col items-start justify-center gap-4 md:w-full md:flex-row lg:w-[80%] lg:px-8">
        {data.damage_relation.double_damage_to.length === 0 ? (
          <span className="text-center">Nenhuma vantagem de dano</span>
        ) : (
          <div className="flex flex-col items-start justify-evenly gap-1">
            <span className="text-base capitalize">Forças:</span>
            <div className="flex items-center justify-center gap-2">
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
        {data.damage_relation.double_damage_from.length === 0 ? (
          <span className="text-center">Nenhuma desvantagem de dano</span>
        ) : (
          <div className="flex flex-col items-start justify-evenly gap-1">
            <span className="text-base capitalize">Fraquezas:</span>
            <div className="flex items-center justify-center gap-2">
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
      </div>
      <Spacer />
      <div className="flex w-full flex-col items-center justify-center gap-6 md:w-full md:gap-3 lg:w-[70%]">
        <span className="text-base capitalize">Cadeia evolutiva:</span>
        <div className="mb-6 flex w-full flex-col items-center justify-center gap-x-2 md:flex-row">
          <div className="flex items-center justify-center gap-1">
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
              <CaretRight className="size-6 rotate-90 md:rotate-0" />
              <div
                className="grid grid-cols-2 place-items-center items-center justify-center gap-2"
                style={{
                  display: evolutions.second.length === 1 ? 'flex' : 'grid',
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
              <CaretRight className="size-6 rotate-90 md:rotate-0" />
              <div className="flex items-center justify-center gap-1">
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
        <div className="flex w-full items-center justify-center">
          {shinySprite ? (
            <Button
              className="h-auto w-auto rounded-full bg-white p-2 transition-all duration-200 ease-in-out md:p-4"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle className="size-6 text-gray-800 md:size-6" />
            </Button>
          ) : (
            <Button
              className="h-auto w-auto rounded-full bg-gray-800 p-2 transition-all duration-200 ease-in-out md:p-4"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle className="size-6 text-gray-100 md:size-6" />
            </Button>
          )}
        </div>
      </div>

      <Spacer />

      <div className="flex w-full flex-col items-center justify-center text-center">
        <span className="text-base">Gender ratio</span>
        <div className="gender-rate">
          {data.gender ? (
            <CustomChart female={data.gender.female} male={data.gender.male} />
          ) : null}
        </div>
      </div>
      <Spacer />

      <div className="mx-auto flex w-full items-center justify-center">
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
      <BackToTop />
    </div>
  );
}
