import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const DetailRow: React.FC<{label: string; value: string | number}> = ({
  label,
  value,
}) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.text, styles.bold, styles.darkGrey]}>{label}: </Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 15, textAlign: 'center', color: 'black'},
  row: {flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'},
  bold: {fontWeight: '700'},
  darkGrey: {color: 'darkgrey'},
  white: {color: 'white'},
});
