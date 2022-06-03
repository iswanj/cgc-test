import React from 'react';
import {FlatList} from 'react-native';

import {View, Text, ListItem} from 'react-native-ui-lib';

import {AlbumItem} from './AlbumItem';
import {useAlbums} from '@cgc/services/apis';

export const Home = () => {
  const {albums, isLoading} = useAlbums();
  const keyExtractor = item => item.id;
  return (
    <View flex>
      <FlatList
        data={albums}
        renderItem={({item}) => <AlbumItem key={item.id} item={item} />}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
