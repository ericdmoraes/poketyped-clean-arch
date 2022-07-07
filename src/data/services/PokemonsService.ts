import {IPokemonsService} from '../../domain/services/IPokemonService';
import {Pokemon} from '../../domain/types/Pokemons';
import ApiWrapper from '../httpClient/ApiWrapper';

type GetPokemonsResponse = {
  results: Pokemon[];
};

export default class PokemonsService implements IPokemonsService {
  private apiWrapper: ApiWrapper;

  constructor(apiWrapper: ApiWrapper) {
    this.apiWrapper = apiWrapper;
  }

  async listAllPokemons() {
    const {results} = await this.apiWrapper.get<GetPokemonsResponse>(
      '/pokemon',
    );
    return results;
  }
}
