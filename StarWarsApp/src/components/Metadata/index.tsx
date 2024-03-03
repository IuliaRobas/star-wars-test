import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Character, Planet, Species, Starship, Vehicle} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Item = Character | Planet | Vehicle | Species | Starship;

export const Metadata: React.FC<{items: Array<Item>; type: string}> = ({
  items,
  type,
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const DetailItem: React.FC<{item: Item}> = ({item}) => {
    const handleOnPress = () => {
      switch (type) {
        case 'Characters': {
          navigation.navigate('CharacterDetail', {character: item});
          break;
        }
        case 'Planets': {
          navigation.navigate('PlanetDetail', {planet: item});
          break;
        }
        case 'Vehicles': {
          navigation.navigate('VehicleDetail', {vehicle: item});
          break;
        }
        case 'Starships': {
          navigation.navigate('StarshipDetail', {starship: item});
          break;
        }
        case 'Species': {
          navigation.navigate('SpeciesDetail', {species: item});
          break;
        }
        default:
          break;
      }
    };

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handleOnPress}>
        <Text style={[styles.text, styles.white]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text style={[styles.text, styles.bold, styles.darkGrey]}>{type}: </Text>
      <>
        {items.map((item: Item) => (
          <DetailItem item={item} key={item.name} />
        ))}
      </>
    </>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 15, textAlign: 'center', color: 'black'},
  title: {fontSize: 19, marginBottom: 8, fontWeight: '800'},

  bold: {fontWeight: '700'},
  darkGrey: {color: 'darkgrey'},
  itemContainer: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'black',
    marginVertical: 5,
  },
  white: {color: 'white'},
});
