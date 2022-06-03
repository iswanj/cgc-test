import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {View, Text, ListItem} from 'react-native-ui-lib';

import {useRoute} from '@react-navigation/native';

export const PhotoScreen = () => {
  const route = useRoute();
  const item = route.params.item;
  return (
    <View flex centerH marginT-20>
      <View centerH style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.url}} />
        <Text title capital paddingH-20 marginT-20>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
});
