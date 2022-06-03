import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Colors, View, ListItem, Text} from 'react-native-ui-lib';

import {useNavigation} from '@react-navigation/native';

export const PhotoItem = ({item}) => {
  const navigation = useNavigation();

  const handleClick = id => {
    navigation.navigate('PhotoScreen', {
      item,
    });
  };
  return (
    <ListItem
      containerStyle={styles.container}
      activeBackgroundColor={Colors.grey60}
      height={150}
      width={150}
      onPress={() => handleClick(item.id)}>
      <View flex paddingH-10 centerV row>
        <View width={150} height={150}>
          <Image style={styles.image} source={{uri: item.thumbnailUrl}} />
        </View>
        <View paddingH-10 flex-5>
          <Text capital>{item.title}</Text>
        </View>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
