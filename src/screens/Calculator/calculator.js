import React from 'react';
import { View } from 'react-native';

import Screen from '../../components/Screen';
import Pad from '../../components/Pad';
import Operation from '../../components/Operation';
import Result from '../../components/Result';
import styles from './styles';
import {
  isEmptyLeftValue,
  isEmptyRightValue,
  isEmptyResult,
  isEmptyOperator,
  isValidLeftValue,
  isValidRightValue,
  isValidResult,
  isInvalidLeftValue,
  isInvalidRightValue,
} from '../../selectors/operations';

const Calculator = ({ operations, ...actionCreators }) => {
  const onNumberPress = key => {
    if (
      !isValidLeftValue({ operations }) ||
      isEmptyOperator({ operations }) ||
      !isEmptyResult({ operations })
    ) {
      actionCreators.addLeftValue(key);
      return;
    }

    actionCreators.addRightValue(key);
  };

  const onResult = () => {
    if (
      !isValidLeftValue({ operations }) ||
      !isValidRightValue({ operations }) ||
      isEmptyOperator({ operations })
    ) {
      return;
    }

    actionCreators.addResult();
  };

  const onDelete = () => {
    if (!isEmptyResult({ operations })) {
      actionCreators.removeResult();
      return;
    }

    if (!isEmptyRightValue({ operations })) {
      actionCreators.removeRightValue();
      return;
    }

    if (!isEmptyOperator({ operations })) {
      actionCreators.removeOperator();
      return;
    }

    if (!isEmptyLeftValue({ operations })) {
      actionCreators.removeLeftValue();
      return;
    }
  };

  const onOperatorPress = key => {
    if (
      (!isEmptyLeftValue({ operations }) && isInvalidLeftValue({ operations })) ||
      (!isEmptyRightValue({ operations }) && isInvalidRightValue({ operations })) ||
      (isEmptyLeftValue({ operations }) && ['*', '/'].includes(key))
    ) {
      return;
    }

    if (isValidResult({ operations })) {
      return actionCreators.newOperationFromResult(key);
    }

    if (isEmptyLeftValue({ operations }) && key === '-') {
      return actionCreators.addLeftValue(key);
    }

    if (!isEmptyOperator({ operations }) && key === '-' && isEmptyRightValue({ operations })) {
      return actionCreators.addRightValue(key);
    }

    if (
      isEmptyResult({ operations }) &&
      isValidRightValue({ operations }) &&
      isValidLeftValue({ operations })
    ) {
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
          onLongDelete={() => actionCreators.removeAll()}
          onResult={onResult}
        />
      </View>
    </View>
  );
};

export default Calculator;
