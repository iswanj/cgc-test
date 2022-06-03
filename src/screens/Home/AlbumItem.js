import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, View, ListItem, Text} from 'react-native-ui-lib';

import {useNavigation} from '@react-navigation/native';

export const AlbumItem = ({item}) => {
  const navigation = useNavigation();

  const handleClick = id => {
    navigation.navigate('Album', {
      id,
    });
  };
  return (
    <ListItem
      containerStyle={styles.container}
      activeBackgroundColor={Colors.grey60}
      height={50}
      onPress={() => handleClick(item.id)}>
      <View paddingH-10 centerV>
        <Text capital>{item.title}</Text>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
