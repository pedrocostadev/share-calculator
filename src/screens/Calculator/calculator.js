import React from 'react';
import { View } from 'react-native';

import Screen from '../../components/Screen';
import Pad from '../../components/Pad';
import Operation from '../../components/Operation';
import Result from '../../components/Result';
import styles from './styles';

const Calculator = ({ leftValue, operator, rightValue, result, ...actionCreators }) => {
  const onNumberPress = key => {
    if (!leftValue || isNaN(leftValue) || !operator || result !== undefined) {
      actionCreators.addLeftValue(key);
      return;
    }

    actionCreators.addRightValue(key);
  };

  const onResult = () => {
    if (!leftValue || isNaN(rightValue) || !operator) {
      return;
    }

    actionCreators.addResult();
  };

  const onDelete = () => {
    if (result) {
      actionCreators.removeResult();
      return;
    }

    if (rightValue) {
      actionCreators.removeRightValue();
      return;
    }

    if (operator) {
      actionCreators.removeOperator();
      return;
    }

    if (leftValue) {
      actionCreators.removeLeftValue();
      return;
    }
  };

  const onOperatorPress = key => {
    if ((leftValue && isNaN(leftValue)) || (rightValue && isNaN(rightValue))) {
      return;
    }

    if (result !== undefined) {
      return actionCreators.newOperationFromResult(key);
    }

    if (!leftValue && key === '-') {
      return actionCreators.addLeftValue(key);
    }

    if (operator && key === '-' && !rightValue) {
      return actionCreators.addRightValue(key);
    }

    if (!result && rightValue && leftValue) {
      return actionCreators.newOperation(key);
    }

    actionCreators.addOperator(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Screen>
          <>
            <Operation />
            <Result />
          </>
        </Screen>
      </View>
      <View style={styles.pad}>
        <Pad
          onNumberPress={onNumberPress}
          onOperatorPress={onOperatorPress}
          onDelete={onDelete}
          onResult={onResult}
        />
      </View>
    </View>
  );
};

export default Calculator;
