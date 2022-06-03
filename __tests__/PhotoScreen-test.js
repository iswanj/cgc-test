import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {act} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {PhotoScreen} from '@cgc/screens/PhotoScreen';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
    useRoute: () => ({
      params: {
        item: {
          url: '',
          title: '',
        },
      },
    }),
  };
});

describe('PhotoScreen screen', () => {
  beforeEach(() => {
    // Alternatively, set "clearMocks" in your Jest config to "true"
    mockedDispatch.mockClear();
  });
  it('should match snapshot', async () => {
    const result = render(
      <NavigationContainer>
        <PhotoScreen />
      </NavigationContainer>,
    );
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
  });
});
