import React from 'react';
import {Stack} from '..';

const stackConfigOptions = {headerShown: false};

export function StackNavigator({
  children,
  initialRouteName,
}: {
  children: React.ReactElement;
  initialRouteName: string;
}) {
  return (
    <Stack.Navigator
      screenOptions={stackConfigOptions}
      initialRouteName={initialRouteName}>
      {children}
    </Stack.Navigator>
  );
}
