import React from 'react';
import {routeNames, Stack} from '../..';
import {StackNavigator} from '../../Navigators/StackNavigator';

import SettingsScreen from '../../../pages/settings';

export function SettingsStack() {
  return (
    <StackNavigator
      initialRouteName={routeNames.settings.routeStackName}
      children={
        <>
          <Stack.Screen
            name={routeNames.settings.routeStackName}
            component={SettingsScreen}
          />
        </>
      }
    />
  );
}
