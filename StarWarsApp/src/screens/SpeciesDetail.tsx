import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import _ from 'lodash';

import {Species} from '../types';
import {DetailRow} from '../components';

export const SpeciesDetail = () => {
  const route = useRoute();
  const {species} = route?.params as {species: Species};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <DetailRow label="Classification" value={species.classification} />
        <DetailRow label="Designation" value={species.designation} />
        <DetailRow label="Average height" value={species.average_height} />
        <DetailRow label="Skin colors" value={species.skin_colors} />
        <DetailRow label="Hair colors" value={species.hair_colors} />
        <DetailRow label="Eye colors" value={species.eye_colors} />
        <DetailRow label="Average lifespan" value={species.average_height} />
        <DetailRow label="Language" value={species.language} />
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
