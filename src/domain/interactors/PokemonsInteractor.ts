import {inject, injectable} from 'inversify';
import {TYPES} from '../../di/types';
import {IPokemonsInteractor} from '../interfaces/interactors/IPokemonsInteractor';
import {IPokemonsService} from '../interfaces/services/IPokemonService';

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
