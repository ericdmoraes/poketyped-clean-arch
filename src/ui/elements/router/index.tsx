import React from 'react';

import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FavoritesStack} from './Stacks/favorites';
import {SettingsStack} from './Stacks/settings';
import {PokedexStack} from './Stacks/pokedex';

export const Stack = createNativeStackNavigator();

export const Tab = createBottomTabNavigator();

export const routeNames = {
  pokedex: {
    title: 'Pokédex',
    routeStackName: 'pokedexStack',
    routeTabName: 'pokedexTab',
  },
  pokemonDetails: {
    title: 'Pokémon Details',
    routeStackName: 'pokemonDetailsStack',
    routeTabName: 'pokemonDetailsTab',
  },
  settings: {
    title: 'Settings',
    routeStackName: 'settingsStack',
    routeTabName: 'settingsTab',
  },
  favorites: {
    title: 'Favorites',
    routeStackName: 'favoritesStack',
    routeTabName: 'favoritesTab',
  },
};

const bottomTabConfig = {
  tabBarActiveTintColor: '#000',
  headerShown: false,
};

const SetUpPokedexTabIcon = ({focused}: {focused: boolean}) => {
  const iconsColor = focused ? 'black' : 'silver';
  return (
    <MaterialCommunityIcons name="pokeball" size={32} color={iconsColor} />
  );
};

const SetUpFavoritesTabIcon = ({focused}: {focused: boolean}) => {
  const iconsColor = focused ? 'black' : 'silver';
  return <MaterialIcons name="favorite-border" size={20} color={iconsColor} />;
};

const SetUpSettingsTabIcon = ({focused}: {focused: boolean}) => {
  const iconsColor = focused ? 'black' : 'silver';
  return <SimpleLineIcons name="settings" size={20} color={iconsColor} />;
};

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={routeNames.pokedex.routeTabName}
        screenOptions={{
          ...bottomTabConfig,
        }}>
        <Tab.Screen
          name={routeNames.favorites.routeTabName}
          component={FavoritesStack}
          options={{
            tabBarIcon: SetUpFavoritesTabIcon,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name={routeNames.pokedex.routeTabName}
          component={PokedexStack}
          options={{
            tabBarIcon: SetUpPokedexTabIcon,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name={routeNames.settings.routeTabName}
          component={SettingsStack}
          options={{
            tabBarIcon: SetUpSettingsTabIcon,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
