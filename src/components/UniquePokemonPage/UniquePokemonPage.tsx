import { useNavigate } from 'react-router-dom';
import { UniquePokemonData } from '../../interfaces/pokemonInterfaces';
import theme from '../../styles/theme';
import { Text } from '../Text/Text';
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
      <div className="relative mb-2 flex w-full items-center justify-center">
        {shinySprite ? (
          <img
            className="size-72 lg:size-[30rem]"
            src={checkimgIMG(data.official_artwork.shiny)}
            alt={`${data.name} image`}
          />
        ) : (
          <img
            className="size-72 lg:size-[30rem]"
            src={checkimgIMG(data.official_artwork.default)}
            alt={`${data.name} image`}
          />
        )}
        <div className="absolute right-[2%] top-0">
          {shinySprite ? (
            <Button
              className="h-auto w-auto rounded-full bg-white p-4 transition-all duration-200 ease-in-out"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle size={24} color={theme.colors.gray[800]} />
            </Button>
          ) : (
            <Button
              className="h-auto w-auto rounded-full bg-gray-400 p-4 transition-all duration-200 ease-in-out"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle size={24} color={theme.colors.gray[100]} />
            </Button>
          )}
        </div>
        {forms && forms.length > 1 ? (
          <div className="absolute bottom-0 right-[2%] flex size-56 flex-col items-center justify-center gap-3">
            <img
              id="formSprite"
              className="size-28 md:size-36 lg:size-48"
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

      <div className="flex w-full flex-col items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-3 items-start justify-center px-8 text-center md:gap-1">
          <Text size="xxl" weight="bold" transform="capitalize" id="name">
            {data.name?.split('-').join(' ')}
          </Text>
          <Text size="xxl" transform="capitalize" id="id">
            #{addZeroes(data.id, 3)}
          </Text>
          <div className="typesWrapper">
            <div className="my-1 flex w-full flex-row items-start justify-center gap-4">
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
          <div className="text-justify">
            <Text size="md">{data.flavor?.split('\f').join(' ')}</Text>
          </div>
        </div>
      </div>

      <Spacer />

      <div className="grid w-[70%] grid-cols-2 gap-x-8 px-8">
        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Altura:
          </Text>
          <div className="flex flex-1 items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3">
            <Text size="md">{(data.height * 0.1).toFixed(2)}m</Text>
          </div>
        </div>

        <div className="infoCard">
          <Text size="md" transform="capitalize">
            Peso:
          </Text>
          <div className="flex flex-1 items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3">
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
                className="relative flex flex-1 cursor-pointer items-center justify-center rounded-md border border-gray-500 bg-gray-800 py-3 transition-all duration-200 ease-in-out hover:border-primary-500"
              >
                <Text size="md" transform="capitalize" className="abilityName">
                  {ability.ability.name.split('-').join(' ')}
                </Text>
              </div>
            </div>
          );
        })}
      </div>

      <Spacer />

      <div className="flex w-[70%] flex-col items-start justify-center px-8 md:w-full">
        <span className="text-lg">Status base:</span>

        <div className="mx-auto grid w-full grid-cols-2 place-items-center gap-4 gap-x-3">
          {data.stats?.map((stat) => {
            return (
              <div
                className="m-auto flex w-full flex-col items-start justify-center gap-1 pt-2"
                key={`${stat.stat.name}-${stat.effort}`}
              >
                <Text size="md" transform="capitalize">
                  {stat.stat.name.split('-').join(' ')}
                </Text>

                <div className="w-full rounded-md bg-gray-600">
                  <div
                    style={{
                      width: handleStatsBar(stat.base_stat),
                      maxWidth: '100%',
                      backgroundColor: `${theme.colors.primary[500]}`,
                      borderRadius: '.4rem',
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
      <div className="flex w-[70%] flex-row items-start justify-center gap-10 p-8 md:w-full md:flex-col md:gap-2">
        {data.damage_relation.double_damage_to.length === 0 ? null : (
          <div className="flex flex-col items-start justify-evenly gap-1">
            <Text size="md">Forças:</Text>
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
        {data.damage_relation.double_damage_from.length === 0 ? null : (
          <div className="flex flex-col items-start justify-evenly gap-1">
            <Text size="md">Fraquezas:</Text>
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
      <div className="flex w-[70%] flex-col items-center justify-center gap-6 px-8 py-3 md:w-full md:gap-3">
        <Text size="md">Cadeia evolutiva:</Text>
        <div className="mb-6 flex w-full items-center justify-center gap-8">
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
              <CaretRight size={24} />
              <div
                className="grid grid-cols-2 place-items-center items-center justify-center gap-1"
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
              <CaretRight size={24} />
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
              className="h-auto w-auto rounded-full bg-white p-4 transition-all duration-200 ease-in-out"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle size={24} color={theme.colors.gray[800]} />
            </Button>
          ) : (
            <Button
              className="h-auto w-auto rounded-full bg-gray-400 p-4 transition-all duration-200 ease-in-out"
              onClick={() => setShinySprite(!shinySprite)}
            >
              <Sparkle size={24} color={theme.colors.gray[100]} />
            </Button>
          )}
        </div>
      </div>

      <Spacer />

      <div className="flex w-full flex-col items-center justify-center text-center">
        <Text>Gender ratio</Text>
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
