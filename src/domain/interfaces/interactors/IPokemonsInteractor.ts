export interface IPokemonsInteractor {
  getPokemonsList(onSuccess: Function, onError: Function): Promise<void>;
  getPokemonByName(
    name: string,
    onSuccess: Function,
    onError: Function,
  ): Promise<void>;
}
