import {inject, injectable} from 'inversify';
import {TYPES} from '../../di/types';
import {IPokemonsService} from '../../domain/services/IPokemonService';
import {Pokemon} from '../../domain/types/Pokemons';
import ApiWrapper from '../httpClient/ApiWrapper';

type GetPokemonsResponse = {
  results: Pokemon[];
};

@injectable()
export default class PokemonsService implements IPokemonsService {
  @inject(TYPES.IApiClient) private apiWrapper!: ApiWrapper;

  async listAllPokemons() {
    const {results} = await this.apiWrapper.get<GetPokemonsResponse>(
      '/pokemon',
    );
    return results;
  }
}
