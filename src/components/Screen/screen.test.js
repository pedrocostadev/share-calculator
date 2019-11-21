import React from 'react';
import { Text } from 'react-native';
import { render, cleanup } from '@testing-library/react-native';

import Screen from './';

describe('<Screen />', () => {
  afterEach(cleanup);

  test('should render children', async () => {
    const text = 'test-the-screen';

    const { queryAllByText, container } = render(
      <Screen>
        <Text>{text}</Text>
      </Screen>,
    );
    const ocurrences = await queryAllByText(text);
    expect(ocurrences).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
