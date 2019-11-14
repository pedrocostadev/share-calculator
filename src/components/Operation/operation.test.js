import React from 'react';
import Operation from './operation';
import { render, cleanup } from '@testing-library/react-native';

describe('<Operation />', () => {
  afterEach(cleanup);

  test('should render', async () => {
    const text = '12 + 12';

    const { queryAllByText, container } = render(<Operation text={text} />);
    const ocurrences = await queryAllByText(text);

    expect(ocurrences).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
