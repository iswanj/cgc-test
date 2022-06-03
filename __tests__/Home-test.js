/**
 * @format
 */

jest.useFakeTimers();
import 'react-native';
import React from 'react';
import {Home} from '@cgc/screens/Home';

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeEach(() => {
  jest.resetAllMocks();
  jest.useFakeTimers();
});

describe('Home Screen', () => {
  it('happy render', () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});
