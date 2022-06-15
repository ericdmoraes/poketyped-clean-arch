import React from 'react';

import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PokedexScreen from '../pages/pokedex';
import PokemonDetails from '../pages/pokedex/pokemonDetails';

import SettingsScreen from '../pages/settings';
import FavoritesScreen from '../pages/favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const routeNames = {
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

const stackConfigOptions = {headerShown: false};

function StackNavigator({
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

function PokedexStack() {
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
						component={PokemonDetails}
					/>
				</>
			}
		/>
	);
}

function SettingsStack() {
	return (
		<StackNavigator
			initialRouteName={routeNames.settings.routeStackName}
			children={
				<Stack.Screen
					name={routeNames.settings.routeStackName}
					component={SettingsScreen}
				/>
			}
		/>
	);
}

function FavoritesStack() {
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
						tabBarIcon: ({focused, color, size}) => {
							const iconsColor = focused ? 'black' : 'silver';
							return (
								<MaterialIcons
									name="favorite-border"
									size={20}
									color={iconsColor}
								/>
							);
						},
						tabBarShowLabel: false,
					}}
				/>
				<Tab.Screen
					name={routeNames.pokedex.routeTabName}
					component={PokedexStack}
					options={{
						tabBarIcon: ({focused, color, size}) => {
							const iconsColor = focused ? 'black' : 'silver';
							return (
								<MaterialCommunityIcons
									name="pokeball"
									size={32}
									color={iconsColor}
								/>
							);
						},
						tabBarShowLabel: false,
					}}
				/>
				<Tab.Screen
					name={routeNames.settings.routeTabName}
					component={SettingsStack}
					options={{
						tabBarIcon: ({focused, color, size}) => {
							const iconsColor = focused ? 'black' : 'silver';
							return (
								<SimpleLineIcons name="settings" size={20} color={iconsColor} />
							);
						},
						tabBarShowLabel: false,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
