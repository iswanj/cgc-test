import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@cgc/screens/Home';
import {Album} from '@cgc/screens/Album';
import {PhotoScreen} from '@cgc/screens/PhotoScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Album" component={Album} />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
    </Stack.Navigator>
  );
};
