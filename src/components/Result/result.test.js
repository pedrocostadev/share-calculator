import React from 'react';
import Result from './result';
import { render, cleanup } from '@testing-library/react-native';

describe('<Result />', () => {
  afterEach(cleanup);

  test('should render', async () => {
    const text = '12.2';

    const { queryAllByText, container } = render(<Result text={text} />);
    const ocurrences = await queryAllByText(text);

    expect(ocurrences).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
