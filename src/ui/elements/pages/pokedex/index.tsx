import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const Pokedex: React.FC = (props: any) => {
	return (
		<View>
			{console.log(props)}
			<Text>Pokdex screen!</Text>
		</View>
	);
};

export default Pokedex;
