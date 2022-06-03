import React from 'react';
import {FlatList} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {useRoute} from '@react-navigation/native';
import {useImages} from '@cgc/services/apis';
import {PhotoItem} from './PhotoItem';

export const Album = () => {
  const route = useRoute();
  const {photos, isLoading} = useImages(route.params.id);
  const keyExtractor = item => item.id;

  return (
    <View flex>
      <FlatList
        data={photos}
        renderItem={({item}) => <PhotoItem key={item.id} item={item} />}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
