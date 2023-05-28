import React from 'react'
import { Container } from './styles'
import { TextStyled } from '../Text/styles'
import { TypeCard } from '../TypeCard/TypeCard'

export function TypesForm() {
  return (
    <Container>
      <TypeCard pokemonType='bug' pressable/>
      <TypeCard pokemonType='dark' pressable/>
      <TypeCard pokemonType='dragon' pressable/>
      <TypeCard pokemonType='electric' pressable/>
      <TypeCard pokemonType='fairy' pressable/>
      <TypeCard pokemonType='fighting' pressable/>
      <TypeCard pokemonType='fire' pressable/>
      <TypeCard pokemonType='flying' pressable/>
      <TypeCard pokemonType='grass' pressable/>
      <TypeCard pokemonType='ghost' pressable/>
      <TypeCard pokemonType='ground' pressable/>
      <TypeCard pokemonType='ice' pressable/>
      <TypeCard pokemonType='normal' pressable/>
      <TypeCard pokemonType='poison' pressable/>
      <TypeCard pokemonType='psychic' pressable/>
      <TypeCard pokemonType='water' pressable/>
      <TypeCard pokemonType='steel' pressable/>
      <TypeCard pokemonType='rock' pressable/>
    </Container>
  )
}

