import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Film} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface IProps {
  item: Film;
}

export const FilmsListItem = ({item}: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleOnPress = () => {
    navigation.navigate('FilmDetail', {film: item});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold, styles.darkGrey]}>
            Episode no:{' '}
          </Text>
          <Text style={styles.text}>{item.episode_id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold, styles.darkGrey]}>
            Director:{' '}
          </Text>
          <Text style={styles.text}>{item.director}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold, styles.darkGrey]}>
            Released:{' '}
          </Text>
          <Text style={styles.text}>{item.release_date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'black',
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'black',
  },
  text: {fontSize: 15, textAlign: 'center', color: 'white'},
  title: {fontSize: 19, marginBottom: 8, fontWeight: '800'},
  row: {flexDirection: 'row', justifyContent: 'center'},
  bold: {fontWeight: '700'},
  darkGrey: {color: 'darkgrey'},
});
