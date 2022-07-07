import {Pokemon} from '../../types/Pokemons';

export interface IPokemonsService {
  listAllPokemons(): Promise<Pokemon[]>;
  getPokemonByName(name: string): Promise<any>;
}
