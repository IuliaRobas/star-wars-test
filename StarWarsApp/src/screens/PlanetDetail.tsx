import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import _ from 'lodash';

import {Planet} from '../types';
import {DetailRow} from '../components';

export const PlanetDetail = () => {
  const route = useRoute();
  const {planet} = route?.params as {planet: Planet};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <DetailRow label="Rotation period" value={planet.rotation_period} />
        <DetailRow label="Orbital period" value={planet.orbital_period} />
        <DetailRow label="Diameter" value={planet.diameter} />
        <DetailRow label="Climate" value={planet.climate} />
        <DetailRow label="Gravity" value={planet.gravity} />
        <DetailRow label="Terrain" value={planet.terrain} />
        <DetailRow label="Surface water" value={planet.surface_water} />
        <DetailRow label="Population" value={planet.population} />
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
  white: {color: 'white'},
});
