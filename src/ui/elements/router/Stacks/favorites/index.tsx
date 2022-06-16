import React from 'react';
import {routeNames} from '../..';
import {Stack} from '../..';

import {StackNavigator} from '../../Navigators/StackNavigator';

import FavoritesScreen from '../../../pages/favorites';

export function FavoritesStack() {
  return (
    <StackNavigator
      initialRouteName={routeNames.favorites.routeStackName}
      children={
        <Stack.Screen
          name={routeNames.favorites.routeStackName}
          component={FavoritesScreen}
        />
      }
    />
  );
}
