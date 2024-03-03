import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {Film} from '../../types';
import {FilmsListItem} from './FilmsListItem';

interface IProps {
  data: Array<Film>;
}

export const FilmsList = ({data}: IProps) => {
  const keyExtractor = (item: Film) => `${item.episode_id}`;

  const renderItem: ListRenderItem<Film> = ({item}) => (
    <FilmsListItem item={item} />
  );

  return (
    <FlatList
      data={data}
      extraData={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
