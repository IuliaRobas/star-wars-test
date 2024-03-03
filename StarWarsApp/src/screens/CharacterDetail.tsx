import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import _ from 'lodash';

import {Character} from '../types';
import {DetailRow} from '../components';

export const CharacterDetail = () => {
  const route = useRoute();
  const {character} = route?.params as {character: Character};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <DetailRow label="Height" value={character.height} />
        <DetailRow label="Mass" value={character.mass} />
        <DetailRow label="Hair color" value={character.hair_color} />
        <DetailRow label="Skin color" value={character.skin_color} />
        <DetailRow label="Eye color" value={character.eye_color} />
        <DetailRow label="Birth year" value={character.birth_year} />
        <DetailRow label="Gener" value={character.gender} />
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
