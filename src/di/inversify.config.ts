import {Container} from 'inversify';
import 'reflect-metadata';
import {TYPES} from './types';

import {IPokemonsService} from '../domain/interfaces/services/IPokemonService';
import PokemonsService from '../data/services/PokemonsService';

import {IApiClient} from '../domain/interfaces/services/IApiClient';
import ApiClient from '../data/httpClient/ApiWrapper';

import {IPokemonsInteractor} from '../domain/interfaces/interactors/IPokemonsInteractor';
import PokemonsInteractor from '../domain/interactors/PokemonsInteractor';

const myContainer = new Container();

myContainer.bind<IPokemonsService>(TYPES.IPokemonService).to(PokemonsService);
myContainer.bind<IApiClient>(TYPES.IApiClient).to(ApiClient);
myContainer
  .bind<IPokemonsInteractor>(TYPES.IPokemonsInteractor)
  .to(PokemonsInteractor);

export {myContainer};
