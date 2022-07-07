import {myContainer} from '../../di/inversify.config';
import {TYPES} from '../../di/types';
import {IPokemonsInteractor} from '../../domain/interfaces/interactors/IPokemonsInteractor';

const pokemonsInteractor = myContainer.get<IPokemonsInteractor>(
  TYPES.IPokemonsInteractor,
);

export const getPokemonList = async (
  onSuccess: Function,
  onError: Function,
) => {
  await pokemonsInteractor.getPokemonsList(onSuccess, onError);
};

export const getPokemonByName = async (
  name: string,
  onSuccess: Function,
  onError: Function,
) => {
  await pokemonsInteractor.getPokemonByName(name, onSuccess, onError);
};
