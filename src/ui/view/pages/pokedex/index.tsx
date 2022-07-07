import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Pokemon} from '../../../../domain/types/Pokemons';
import {getPokemonList} from '../../../presenters/PokemonsPresenter';

import {
  Container,
  TitleLabel,
  SearchContainer,
  SearchDescriptionLabel,
  SearchInput,
  PokemonListContainer,
  PokemonNameLabel,
} from './styles';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [pokemonSearch, setPokemonSearch] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPokemonList(onSuccess, onError);
  }, []);

  const onError = () => {
    console.log('Error on view');
  };

  const onSuccess = (pokemonsResponse: Pokemon[]) => {
    setPokemons(pokemonsResponse);
    setLoading(false);
  };

  const RenderPokemonName = (): any => {
    return pokemons.map(pokemon => (
      <PokemonNameLabel key={pokemon.name}>{pokemon.name}</PokemonNameLabel>
    ));
  };

  return (
    <Container>
      <SearchContainer>
        <TitleLabel>Pokédex</TitleLabel>
        <SearchDescriptionLabel>
          Pesquise por um Pokémon por nome ou usando o número nacional da
          Pokédex.
        </SearchDescriptionLabel>
        <SearchInput
          placeholder="Qual o pokemon?!"
          onChangeText={text => console.log(text)}
          onEndEditing={() => console.log('search teste')}
        />
      </SearchContainer>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <PokemonListContainer>
          <RenderPokemonName />
        </PokemonListContainer>
      )}
    </Container>
  );
};

export default Pokedex;
