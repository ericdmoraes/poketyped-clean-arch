import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/home';
import SettingsScreen from '../pages/settings';
import ListScreen from '../pages/list';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Pokédex" component={HomeScreen} />
			<Stack.Screen name="List" component={ListScreen} />
		</Stack.Navigator>
	);
}

function SettingsStack() {
	return (
		<Stack.Navigator initialRouteName="Settings">
			<Stack.Screen name="Settings" component={SettingsScreen} />
		</Stack.Navigator>
	);
}

export default function () {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#000',
					headerShown: false,
				}}>
				<Tab.Screen
					name="HomeStack"
					component={HomeStack}
					options={{
						tabBarLabel: 'Home',
					}}
				/>
				<Tab.Screen
					name="SettingsStack"
					component={SettingsStack}
					options={{
						tabBarLabel: 'Settings',
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
