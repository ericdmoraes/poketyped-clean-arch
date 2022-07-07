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
import {Text, View} from 'react-native';

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
            headerShown: true,
            headerTitle: '',
            headerBackground: () => (
              <View style={{flex: 1, backgroundColor: 'silver'}} />
            ),
            headerRight: () => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'silver',
                  }}>
                  <Text>1</Text>
                  <Text>2</Text>
                  <Text>3</Text>
                </View>
              );
            },
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
