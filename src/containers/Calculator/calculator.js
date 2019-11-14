import React from 'react';
import { View } from 'react-native';

import Screen from '../../components/Screen';
import Pad from '../../components/Pad';
import Operation from '../../components/Operation';
import Result from '../../components/Result';
import styles from './styles';

const Calculator = ({ leftValue, operator, rightValue, result, ...actionCreators }) => {
  const onNumberPress = key => {
    if (!leftValue || !operator || result) {
      actionCreators.addLeftValue(key);
      return;
    }

    actionCreators.addRightValue(key);
  };

  const onResult = () => {
    if (!leftValue || !rightValue || !operator) {
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
    if (operator || !leftValue) {
      return;
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
