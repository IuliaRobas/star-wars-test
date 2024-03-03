import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import _ from 'lodash';

import {Starship} from '../types';
import {DetailRow} from '../components';

export const StarshipDetail = () => {
  const route = useRoute();
  const {starship} = route?.params as {starship: Starship};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <DetailRow label="Model" value={starship.model} />
        <DetailRow label="Manufacturer" value={starship.manufacturer} />
        <DetailRow label="Cost in credits" value={starship.cost_in_credits} />
        <DetailRow label="Length" value={starship.length} />
        <DetailRow
          label="Max atmosphering speed"
          value={starship.max_atmosphering_speed}
        />
        <DetailRow label="Crew" value={starship.crew} />
        <DetailRow label="Passengers" value={starship.passengers} />
        <DetailRow label="Cargo capacity" value={starship.cargo_capacity} />
        <DetailRow label="Consumables" value={starship.consumables} />
        <DetailRow
          label="Hyperdrive rating"
          value={starship.hyperdrive_rating}
        />
        <DetailRow label="MGLT" value={starship.MGLT} />
        <DetailRow label="Starship class" value={starship.starship_class} />
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
