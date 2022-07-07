import {inject, injectable} from 'inversify';
import {TYPES} from '../../di/types';
import {IPokemonsService} from '../services/IPokemonService';

export interface IPokemonsInteractor {
  getPokemonsList(onSuccess: Function, onError: Function): Promise<void>;
}

@injectable()
export default class PokemonsInteractor implements IPokemonsInteractor {
  @inject(TYPES.IPokemonService) private pokemonsService!: IPokemonsService;

  public async getPokemonsList(
    onSuccess: Function,
    onError: Function,
  ): Promise<void> {
    try {
      const pokemons = await this.pokemonsService.listAllPokemons();
      onSuccess(pokemons);
    } catch (error) {
      onError(error);
    }
  }
}
