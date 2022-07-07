import {inject, injectable} from 'inversify';
import {TYPES} from '../../di/types';
import {IPokemonsService} from '../../domain/interfaces/services/IPokemonService';
import {GetPokemonsResponse, PokemonDetails} from '../../domain/types/Pokemons';
import ApiWrapper from '../httpClient/ApiWrapper';

@injectable()
export default class PokemonsService implements IPokemonsService {
  @inject(TYPES.IApiClient) private apiWrapper!: ApiWrapper;

  async getPokemonByName(name: string): Promise<any> {
    const results = await this.apiWrapper.get<PokemonDetails>(
      `/pokemon/${name}`,
    );
    console.log('service => ', results.sprites.front_default);
    return results;
  }

  async listAllPokemons() {
    const {results} = await this.apiWrapper.get<GetPokemonsResponse>(
      '/pokemon',
    );
    return results;
  }
}
