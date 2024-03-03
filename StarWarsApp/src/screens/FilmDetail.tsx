import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _ from 'lodash';
import axios from 'axios';

import {Character, Film, Planet, Species, Starship, Vehicle} from '../types';
import {DetailRow, Metadata} from '../components';

export const FilmDetail = () => {
  const route = useRoute();
  const {film} = route?.params as {film: Film};
  const {vehicles, characters, planets, starships, species} = film;

  const [vehicleDetails, setVehicleDetails] = useState<Array<Vehicle>>([]);
  const [characterDetails, setCharacterDetails] = useState<Array<Character>>(
    [],
  );
  const [planetDetails, setPlanetDetails] = useState<Array<Planet>>([]);
  const [starshipDetails, setStarshipDetails] = useState<Array<Starship>>([]);
  const [speciesDetails, setSpeciesDetails] = useState<Array<Species>>([]);

  const [isLoadingVehicleDetails, setIsLoadingVehicleDetails] =
    useState<boolean>(true);
  const [isLoadingCharacterDetails, setIsLoadingCharacterDetails] =
    useState<boolean>(true);
  const [isLoadingPlanetDetails, setIsLoadingPlanetDetails] =
    useState<boolean>(true);
  const [isLoadingStarshipDetails, setIsLoadingStarshipDetails] =
    useState<boolean>(true);
  const [isLoadingSpeciesDetails, setIsLoadingSpeciesDetails] =
    useState<boolean>(true);

  const loading =
    isLoadingVehicleDetails ||
    isLoadingCharacterDetails ||
    isLoadingPlanetDetails ||
    isLoadingStarshipDetails ||
    isLoadingSpeciesDetails;

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const vehiclesPromises = vehicles.map(async vehicleUrl => {
          const response = await axios.get(vehicleUrl);
          return response.data;
        });

        const vehiclesData = await Promise.all(vehiclesPromises);
        setVehicleDetails(vehiclesData);
        setIsLoadingVehicleDetails(false);
      } catch (error) {
        setIsLoadingVehicleDetails(false);
      }
    };
    if (!_.isEmpty(vehicles)) fetchVehicleDetails();
  }, [vehicles]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const charactersPromises = characters.map(async characterUrl => {
          const response = await axios.get(characterUrl);
          return response.data;
        });

        const charactersData = await Promise.all(charactersPromises);
        setCharacterDetails(charactersData);
        setIsLoadingCharacterDetails(false);
      } catch (error) {
        setIsLoadingCharacterDetails(false);
      }
    };
    if (!_.isEmpty(characters)) fetchCharacterDetails();
  }, [characters]);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const planetsPromises = planets.map(async planetUrl => {
          const response = await axios.get(planetUrl);
          return response.data;
        });

        const planetsData = await Promise.all(planetsPromises);
        setPlanetDetails(planetsData);
        setIsLoadingPlanetDetails(false);
      } catch (error) {
        setIsLoadingPlanetDetails(false);
      }
    };
    if (!_.isEmpty(planets)) fetchPlanetDetails();
  }, [planets]);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const starshipsPromises = starships.map(async starshipUrl => {
          const response = await axios.get(starshipUrl);
          return response.data;
        });

        const starshipsData = await Promise.all(starshipsPromises);
        setStarshipDetails(starshipsData);
        setIsLoadingStarshipDetails(false);
      } catch (error) {
        setIsLoadingStarshipDetails(false);
      }
    };
    if (!_.isEmpty(starships)) fetchStarshipDetails();
  }, [starships]);

  useEffect(() => {
    const fetchSpeciesDetails = async () => {
      try {
        const speciesPromises = species.map(async speciesUrl => {
          const response = await axios.get(speciesUrl);
          return response.data;
        });

        const speciesData = await Promise.all(speciesPromises);
        setSpeciesDetails(speciesData);
        setIsLoadingSpeciesDetails(false);
      } catch (error) {
        setIsLoadingSpeciesDetails(false);
      }
    };
    if (!_.isEmpty(species)) fetchSpeciesDetails();
  }, [species]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <>
              <DetailRow label="Episode no" value={film.episode_id} />
              <DetailRow label="Director" value={film.director} />
              <DetailRow label="Released" value={film.release_date} />
            </>
            <View style={styles.middle}>
              <Text style={styles.text}>{film.opening_crawl}</Text>
            </View>
            <Metadata items={characterDetails} type="Characters" />
            <Metadata items={planetDetails} type="Planets" />
            <Metadata items={vehicleDetails} type="Vehicles" />
            <Metadata items={starshipDetails} type="Starships" />
            <Metadata items={speciesDetails} type="Species" />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 15, textAlign: 'center', color: 'black'},
  title: {fontSize: 19, marginBottom: 8, fontWeight: '800'},
  row: {flexDirection: 'row', justifyContent: 'center'},
  bold: {fontWeight: '700'},
  darkGrey: {color: 'darkgrey'},
  middle: {marginVertical: 20},

  white: {color: 'white'},
});
