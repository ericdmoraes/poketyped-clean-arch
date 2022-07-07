export interface IApiClient {
  get<TResponse>(path: string): Promise<TResponse>;
}
