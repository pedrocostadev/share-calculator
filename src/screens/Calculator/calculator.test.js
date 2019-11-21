import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, NativeTestEvent } from '@testing-library/react-native';
import configureStore from '../../store';

import Calculator from './';

const pressSequence = (sequence, getByText) => {
  sequence.forEach(key => {
    fireEvent(getByText(key), new NativeTestEvent('press'));
  });
};

const renderWithStore = () => {
  const store = configureStore();
  return render(
    <Provider store={store}>
      <Calculator />
    </Provider>,
  );
};

describe('<Operation />', () => {
  afterEach(cleanup);

  describe('left operand', () => {
    test('should be able to type a left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['2', '1'], getByText);

      const expectedDisplayText = '21';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to type a negative left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['-', '2', '1'], getByText);

      const expectedDisplayText = '-21';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to type a decimal left operand 1', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['2', '1', '.', '3', '3'], getByText);

      const expectedDisplayText = '21.33';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to type a decimal left operand 2', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['.', '3', '3'], getByText);

      const expectedDisplayText = '.33';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to type a decimal and negative left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['-', '2', '1', '.', '3', '3'], getByText);

      const expectedDisplayText = '-21.33';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should not be able to type * (mutiplication operator) before left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['*'], getByText);
      const result = await queryAllByText('*');

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should not be able to type / (division operator) before left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['/'], getByText);
      const result = await queryAllByText('/');

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
  });

  describe('operator', () => {
    test('should be able to type the operator', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+'], getByText);

      const expectedDisplayText = '34 +';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to make a sum', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '9', '='], getByText);

      const expectedOperationText = '34 + 9';
      const expectedSumResult = '43';

      const operationTextResult = await queryAllByText(expectedOperationText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operationTextResult).toHaveLength(1);
      expect(sumResult).toHaveLength(1);

      expect(container).toMatchSnapshot();
    });

    test('should be able to make a division', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['4', '0', '/', '2', '='], getByText);

      const expectedOperationText = '40 / 2';
      const expectedSumResult = '20';

      const operationTextResult = await queryAllByText(expectedOperationText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operationTextResult).toHaveLength(1);
      expect(sumResult).toHaveLength(1);

      expect(container).toMatchSnapshot();
    });

    test('should be able to make a mutiplication', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['4', '0', '*', '2', '='], getByText);

      const expectedOperationText = '40 * 2';
      const expectedSumResult = '80';

      const operationTextResult = await queryAllByText(expectedOperationText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operationTextResult).toHaveLength(1);
      expect(sumResult).toHaveLength(1);

      expect(container).toMatchSnapshot();
    });

    test('should be able to make a subtraction', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['4', '0', '-', '2', '='], getByText);

      const expectedOperationText = '40 - 2';
      const expectedSumResult = '38';

      const operationTextResult = await queryAllByText(expectedOperationText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operationTextResult).toHaveLength(1);
      expect(sumResult).toHaveLength(1);

      expect(container).toMatchSnapshot();
    });
  });

  describe('right operand', () => {
    test('should be able to type the right operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '9'], getByText);

      const expectedDisplayText = '34 + 9';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to type a negative right operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '-', '9'], getByText);

      const expectedDisplayText = '34 + -9';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to type a decimal right operand 1', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '1', '.', '9'], getByText);

      const expectedDisplayText = '34 + 1.9';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to type a decimal right operand 2', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['.', '4', '+', '.', '9'], getByText);

      const expectedDisplayText = '.4 + .9';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to type a decimal and negative right operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '-', '1', '.', '9'], getByText);

      const expectedDisplayText = '34 + -1.9';
      const result = await queryAllByText(expectedDisplayText);

      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
  });

  describe('operations from result', () => {
    test('should be able to make a new operation from result', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '-', '4', '=', '+', '2', '='], getByText);

      const expectedDisplayText = '30 + 2';
      const expectedSumResult = '32';

      const operation = await queryAllByText(expectedDisplayText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operation).toHaveLength(1);
      expect(sumResult).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to make a new operation from the current one', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '-', '4', '+', '2', '='], getByText);

      const expectedDisplayText = '30 + 2';
      const expectedSumResult = '32';

      const operation = await queryAllByText(expectedDisplayText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operation).toHaveLength(1);
      expect(sumResult).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
    test('should be able to make a new operation without use previous result', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '+', '3', '=', '2', '+', '2', '2', '='], getByText);

      const expectedDisplayText = '2 + 22';
      const expectedSumResult = '24';

      const operation = await queryAllByText(expectedDisplayText);
      const sumResult = await queryAllByText(expectedSumResult);

      expect(operation).toHaveLength(1);
      expect(sumResult).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
  });
  describe('del', () => {
    test('should be able to completly delete left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', 'DEL', 'DEL'], getByText);

      const leftValue1 = await queryAllByText('3');
      const leftValue2 = await queryAllByText('4');

      expect(leftValue1).toHaveLength(1);
      expect(leftValue2).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to partially delete left operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', 'DEL'], getByText);

      const leftValue1 = await queryAllByText('3');
      const leftValue2 = await queryAllByText('4');

      expect(leftValue1).toHaveLength(2);
      expect(leftValue2).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to delete the operator', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', 'DEL'], getByText);

      const leftValue = await queryAllByText('34');
      const operator = await queryAllByText('+');

      expect(leftValue).toHaveLength(1);
      expect(operator).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should be able to delete the right operand', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '4', '+', '5', '5', 'DEL', 'DEL'], getByText);

      const operation = await queryAllByText('34 +');
      const deletedRightValue = await queryAllByText('55');

      expect(operation).toHaveLength(1);
      expect(deletedRightValue).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    test('should be able to delete a 0 (zero) result', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['3', '*', '0', '=', 'DEL'], getByText);

      const operation = await queryAllByText('3 *');
      const result = await queryAllByText('0');

      expect(operation).toHaveLength(1);
      expect(result).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Invalid operations', () => {
    test('should not try to calculate a invalid operation', async () => {
      const { getByText, queryAllByText, container } = renderWithStore();

      pressSequence(['-', '4', '+', '='], getByText);

      const invalidResult = await queryAllByText('NaN');

      expect(invalidResult).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });
  });
});
