// AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CharacterDetail,
  FilmDetail,
  Films,
  PlanetDetail,
  SpeciesDetail,
  StarshipDetail,
  VehicleDetail,
} from '../screens';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Character, Film, Planet, Species, Starship, Vehicle} from '../types';

type StackParamList = {
  Films: undefined;
  FilmDetail: {film: Film};
  CharacterDetail: {character: Character};
  PlanetDetail: {planet: Planet};
  VehicleDetail: {vehicle: Vehicle};
  StarshipDetail: {starship: Starship};
  SpeciesDetail: {species: Species};
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Films">
          <Stack.Screen
            name="Films"
            component={Films}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FilmDetail"
            component={FilmDetail}
            options={({route}) => ({
              title: route.params?.film.title,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetail}
            options={({route}) => ({
              title: route.params?.character.name,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="PlanetDetail"
            component={PlanetDetail}
            options={({route}) => ({
              title: route.params?.planet.name,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="VehicleDetail"
            component={VehicleDetail}
            options={({route}) => ({
              title: route.params?.vehicle.name,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="StarshipDetail"
            component={StarshipDetail}
            options={({route}) => ({
              title: route.params?.starship.name,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="SpeciesDetail"
            component={SpeciesDetail}
            options={({route}) => ({
              title: route.params?.species.name,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerTitleAlign: 'center',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
