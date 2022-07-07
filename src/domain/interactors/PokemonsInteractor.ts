import {IPokemonsService} from '../services/IPokemonService';

export default class PokemonsInteractor {
  private pokemonsService!: IPokemonsService;

  constructor(pokemonsService: IPokemonsService) {
    this.pokemonsService = pokemonsService;
  }

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
