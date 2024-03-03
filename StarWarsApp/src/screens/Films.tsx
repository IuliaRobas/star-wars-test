import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import _, {debounce} from 'lodash';

import {getFilms} from '../api';
import {FilmsList} from '../components';
import {Film} from '../types';

export const Films: React.FC = () => {
  const [films, setFilms] = useState<Array<Film>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await getFilms();
        setFilms(response?.results);
        setFilteredFilms(response?.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  const debouncedSearch = debounce((query: string) => {
    if (!_.isEmpty(query)) {
      const filtered = films.filter(
        (film: Film) =>
          film.title.toLowerCase().includes(query.toLowerCase()) ||
          film.opening_crawl.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredFilms(filtered);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={styles.fl1}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by title or description"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>
          <View style={styles.fl5}>
            <FilmsList data={filteredFilms} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  fl1: {flex: 1},
  searchInput: {
    padding: 15,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  searchContainer: {
    flex: 0.5,
    paddingTop: 20,
    justifyContent: 'center',
  },
  fl5: {flex: 5},
});
