import React from 'react';
import {routeNames} from '../..';
import {Stack} from '../..';

import {StackNavigator} from '../../Navigators/StackNavigator';

import PokedexScreen from '../../../pages/pokedex';
import PokemonDetailsScreen from '../../../pages/pokedex/pokemonDetails';

export function PokedexStack() {
  return (
    <StackNavigator
      initialRouteName={routeNames.pokedex.routeStackName}
      children={
        <>
          <Stack.Screen
            name={routeNames.pokedex.routeStackName}
            component={PokedexScreen}
          />
          <Stack.Screen
            name={routeNames.pokemonDetails.routeStackName}
            component={PokemonDetailsScreen}
          />
        </>
      }
    />
  );
}
