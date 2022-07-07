import {inject, injectable} from 'inversify';
import {TYPES} from '../../di/types';
import {IPokemonsService} from '../../domain/interfaces/services/IPokemonService';
import {GetPokemonsResponse} from '../../domain/types/Pokemons';
import ApiWrapper from '../httpClient/ApiWrapper';

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
