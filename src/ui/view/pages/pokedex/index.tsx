import React, {useEffect, useState} from 'react';

import {Pokemon} from '../../../../domain/types/Pokemons';
import {
  getPokemonByName,
  getPokemonList,
} from '../../../presenters/PokemonsPresenter';

import HeaderPokedex from './HeaderPokedex';
import ListPokedex from './ListPokedex';

import {Container} from './styles';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPokemonList(onSuccess, onError);
    getPokemonByName(
      'pikachu',
      () => {},
      () => {},
    );
  }, []);

  const onError = () => {
    console.log('Error on view');
  };

  const onSuccess = (pokemonsResponse: Pokemon[]) => {
    setPokemons(pokemonsResponse);
    setLoading(false);
  };

  return (
    <Container>
      <HeaderPokedex />
      <ListPokedex loading={loading} pokemons={pokemons} />
    </Container>
  );
};

export default Pokedex;
