export interface IPokemonsInteractor {
  getPokemonsList(onSuccess: Function, onError: Function): Promise<void>;
}
