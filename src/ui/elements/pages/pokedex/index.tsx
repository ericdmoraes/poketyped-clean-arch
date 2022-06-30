import React, {ReactChild, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

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
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      getPokemonByName();
    };

    fetchData();
  }, []);

  const getPokemonByName = async (name: String = '') => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const {results} = await data.json();
    setPokemons(results);
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
          placeholder={`Qual o nome do pokemon?`}
          onEndEditing={() => console.log('asdasdas')}
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
