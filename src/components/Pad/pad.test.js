import React from 'react';
import { render, cleanup, NativeTestEvent, fireEvent } from '@testing-library/react-native';

import Pad from './';

describe('<Pad />', () => {
  const mockedProps = {};

  beforeEach(() => {
    cleanup();
    mockedProps.onNumberPress = jest.fn();
    mockedProps.onOperatorPress = jest.fn();
    mockedProps.onResult = jest.fn();
    mockedProps.onDelete = jest.fn();
  });

  test('should render all digits', async () => {
    const { queryAllByText } = render(<Pad {...mockedProps} />);

    const keyOcurrences = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(key =>
      queryAllByText(key),
    );

    await Promise.all(keyOcurrences);

    keyOcurrences.forEach(key => expect(key).toHaveLength(1));
  });

  test('should render all operators', async () => {
    const { queryAllByText } = render(<Pad {...mockedProps} />);

    const keyOcurrences = ['+', '-', '/', '*'].map(key => queryAllByText(key));

    await Promise.all(keyOcurrences);

    keyOcurrences.forEach(key => expect(key).toHaveLength(1));
  });

  test('should render DEL key', async () => {
    const { queryAllByText } = render(<Pad {...mockedProps} />);
    const delOcurrences = await queryAllByText('DEL');
    expect(delOcurrences).toHaveLength(1);
  });

  test('should call onNumberPress', async () => {
    const { getByText } = render(<Pad {...mockedProps} />);

    fireEvent(getByText('1'), new NativeTestEvent('press'));

    expect(mockedProps.onNumberPress).toHaveBeenCalledTimes(1);
    expect(mockedProps.onNumberPress).toHaveBeenCalledWith('1');

    expect(mockedProps.onOperatorPress).toHaveBeenCalledTimes(0);
    expect(mockedProps.onResult).toHaveBeenCalledTimes(0);
  });

  test('should call onOperatorPress', async () => {
    const { getByText } = render(<Pad {...mockedProps} />);

    fireEvent(getByText('1'), new NativeTestEvent('press'));
    fireEvent(getByText('+'), new NativeTestEvent('press'));

    expect(mockedProps.onNumberPress).toHaveBeenCalledTimes(1);
    expect(mockedProps.onOperatorPress).toHaveBeenCalledTimes(1);
    expect(mockedProps.onOperatorPress).toHaveBeenCalledWith('+');

    expect(mockedProps.onResult).toHaveBeenCalledTimes(0);
  });

  test('should call onResult in case of a valid operation', async () => {
    const { getByText } = render(<Pad {...mockedProps} />);

    fireEvent(getByText('1'), new NativeTestEvent('press'));
    fireEvent(getByText('+'), new NativeTestEvent('press'));
    fireEvent(getByText('3'), new NativeTestEvent('press'));
    fireEvent(getByText('='), new NativeTestEvent('press'));

    expect(mockedProps.onResult).toHaveBeenCalledTimes(1);

    expect(mockedProps.onOperatorPress).toHaveBeenCalledTimes(1);
    expect(mockedProps.onNumberPress).toHaveBeenCalledTimes(2);
  });
});
