import Factory from '../../di/Factory';

const factory = new Factory();
const pokemonsInteractor = factory.createPokemonsInteractor();

export const getPokemonList = async (
  onSuccess: Function,
  onError: Function,
) => {
  await pokemonsInteractor.getPokemonsList(onSuccess, onError);
};
