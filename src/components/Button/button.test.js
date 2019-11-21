import React from 'react';
import { render, cleanup, NativeTestEvent, fireEvent } from '@testing-library/react-native';

import Button from './';

describe('<Button />', () => {
  const mockedProps = {
    title: 'Button example',
    onPress: jest.fn(),
  };

  afterEach(cleanup);

  test('should render the title', async () => {
    const { queryAllByText, container } = render(<Button {...mockedProps} />);
    const ocurrences = await queryAllByText(mockedProps.title);
    expect(ocurrences).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test('should call onPress', async () => {
    const { getByText } = render(<Button {...mockedProps} />);
    fireEvent(getByText(mockedProps.title), new NativeTestEvent('press'));
    expect(mockedProps.onPress).toHaveBeenCalledTimes(1);
  });
});
