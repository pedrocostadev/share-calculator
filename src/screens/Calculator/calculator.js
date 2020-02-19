import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';

import Screen from '../../components/Screen';
import Pad from '../../components/Pad';
import CollapsePanel from '../../components/CollapsePanel';
import Operation from '../../components/Operation';
import Result from '../../components/Result';
import styles from './styles';
import {
  isEmptyLeftValue,
  isEmptyRightValue,
  isEmptyResult,
  isEmptyOperator,
  isValidResult,
  selectIsInsertingLeftValue,
  selectIsValidForResult,
  selectIsValidForOperator,
  selectIsValidForNewOperation,
} from '../../selectors/operations';
import { isPlusOrMinus } from '../../utils';

const Calculator = ({ operationsState, isPadVisible, ...actionCreators }) => {
  const onNumberPress = key => {
    if (selectIsInsertingLeftValue(operationsState)) {
      actionCreators.addLeftValue(key);
      return;
    }
    actionCreators.addRightValue(key);
  };

  const onResult = () => {
    if (!selectIsValidForResult(operationsState)) {
      return;
    }
    actionCreators.addResult();
  };

  const onDelete = () => {
    if (!isEmptyResult(operationsState)) {
      actionCreators.removeResult();
      return;
    }

    if (!isEmptyRightValue(operationsState)) {
      actionCreators.removeRightValue();
      return;
    }

    if (!isEmptyOperator(operationsState)) {
      actionCreators.removeOperator();
      return;
    }

    if (!isEmptyLeftValue(operationsState)) {
      actionCreators.removeLeftValue();
      return;
    }
  };

  const onOperatorPress = key => {
    if (
      !selectIsValidForOperator(operationsState) ||
      (isEmptyLeftValue(operationsState) && !isPlusOrMinus(key))
    ) {
      return;
    }

    if (isValidResult(operationsState)) {
      return actionCreators.newOperationFromResult(key);
    }

    if (isEmptyLeftValue(operationsState) && key === '-') {
      return actionCreators.addLeftValue(key);
    }

    if (!isEmptyOperator(operationsState) && key === '-' && isEmptyRightValue(operationsState)) {
      return actionCreators.addRightValue(key);
    }

    if (selectIsValidForNewOperation(operationsState)) {
      return actionCreators.newOperation(key);
    }

    actionCreators.addOperator(key);
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={isPadVisible ? styles.screen : styles.fullScreen}>
        <Screen>
          <>
            <Operation />
            <Result />
          </>
        </Screen>
      </View>
      <View style={isPadVisible ? styles.expandedPanel : styles.collapsedPanel}>
        <CollapsePanel isVisible={isPadVisible} onPress={actionCreators.togglePadVisibility}>
          <Pad
            onNumberPress={onNumberPress}
            onOperatorPress={onOperatorPress}
            onDelete={onDelete}
            onLongDelete={actionCreators.removeAll}
            onResult={onResult}
          />
        </CollapsePanel>
      </View>
    </View>
  );
};

export default Calculator;
