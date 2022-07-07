import React from 'react';
import {Text} from 'react-native';
import {Pokemon} from '../../../../../domain/types/Pokemons';

import {PokemonListContainer, PokemonNameLabel} from './styles';

const ListPokedex = ({
  loading,
  pokemons,
}: {
  loading: boolean;
  pokemons: Pokemon[];
}) => {
  const RenderPokemonName = (): any => {
    return pokemons.map(pokemon => (
      <PokemonNameLabel key={pokemon.name}>{pokemon.name}</PokemonNameLabel>
    ));
  };

  return loading ? (
    <Text>Carregando...</Text>
  ) : (
    <PokemonListContainer>
      <RenderPokemonName />
    </PokemonListContainer>
  );
};

export default ListPokedex;
