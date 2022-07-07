import React from 'react';
import {routeNames} from '../..';
import {Stack} from '../..';

import {StackNavigator} from '../../Navigators/StackNavigator';

import PokedexScreen from '../../../pages/pokedex';

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
        </>
      }
    />
  );
}
