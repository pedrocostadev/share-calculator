import React from 'react';
import { Text } from 'react-native';
import { render, cleanup, NativeTestEvent, fireEvent } from '@testing-library/react-native';

import CollapsePanel from './';

describe('<CollapsePanel />', () => {
  afterEach(cleanup);

  test('should render the children', async () => {
    const randomTitle = 'randomTitle';
    const onPress = jest.fn();
    const { queryAllByText, container } = render(
      <CollapsePanel isVisible onPress={onPress}>
        <Text>{randomTitle}</Text>
      </CollapsePanel>,
    );
    const ocurrences = await queryAllByText(randomTitle);
    expect(ocurrences).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
  test('should call onPress after click collapse button', async () => {
    const randomTitle = 'randomTitle';
    const onPress = jest.fn();
    const { queryAllByText, getByTestId } = render(
      <CollapsePanel isVisible onPress={onPress}>
        <Text>{randomTitle}</Text>
      </CollapsePanel>,
    );
    const ocurrences = await queryAllByText(randomTitle);
    expect(ocurrences).toHaveLength(1);
    expect(onPress).toHaveBeenCalledTimes(0);
    const collapseButton = getByTestId('collapse-panel-button');
    fireEvent(collapseButton, new NativeTestEvent('press'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
