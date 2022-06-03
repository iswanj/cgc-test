import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {act} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {Album} from '@cgc/screens/Album';

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
        id: '1111',
      },
    }),
  };
});

describe('Album screen', () => {
  beforeEach(() => {
    // Alternatively, set "clearMocks" in your Jest config to "true"
    mockedDispatch.mockClear();
  });

  it('should match snapshot', async () => {
    const result = render(
      <NavigationContainer>
        <Album />
      </NavigationContainer>,
    );
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
  });
});
