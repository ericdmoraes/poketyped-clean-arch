import PokemonsService from '../data/services/PokemonsService';

import PokemonsInteractor from '../domain/interactors/PokemonsInteractor';

import ApiWrapper from '../data/httpClient/ApiWrapper';

export default class Factory {
  createPokemonsInteractor(): PokemonsInteractor {
    const apiWrapper = new ApiWrapper();
    const pokemonsService = new PokemonsService(apiWrapper);

    return new PokemonsInteractor(pokemonsService);
  }
}
