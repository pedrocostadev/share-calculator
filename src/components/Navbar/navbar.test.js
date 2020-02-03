import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import NavBar from './navbar';

describe('<NavBar />', () => {
  const mockedProps = {
    screenText: '1 + 2 = 3',
  };

  beforeEach(() => {
    cleanup();
  });

  test('should render', async () => {
    const { container } = render(<NavBar {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
