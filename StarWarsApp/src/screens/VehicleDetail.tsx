import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import _ from 'lodash';

import {Vehicle} from '../types';
import {DetailRow} from '../components';

export const VehicleDetail = () => {
  const route = useRoute();
  const {vehicle} = route?.params as {vehicle: Vehicle};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <DetailRow label="Model" value={vehicle.model} />
        <DetailRow label="Manufecturer" value={vehicle.manufacturer} />
        <DetailRow label="Cost in credits" value={vehicle.cost_in_credits} />
        <DetailRow label="Length" value={vehicle.length} />
        <DetailRow
          label="Max atmoshpering speed"
          value={vehicle.max_atmosphering_speed}
        />
        <DetailRow label="Crew" value={vehicle.crew} />
        <DetailRow label="Passengers" value={vehicle.passengers} />
        <DetailRow label="Cargo capacity" value={vehicle.cargo_capacity} />
        <DetailRow label="Consumables" value={vehicle.consumables} />
        <DetailRow label="Vehicle class" value={vehicle.vehicle_class} />
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
