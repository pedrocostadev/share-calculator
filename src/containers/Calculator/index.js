import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Col, Row, Grid} from 'react-native-easy-grid';

import Screen from '../../components/Screen';
import Pad from '../../components/Pad';
import {isNumber, isOperator, isEqual} from '../../utils';

const Calculator = () => {
  const [state, setState] = useState({
    leftValue: '',
    operator: '',
    rightValue: '',
    result: undefined,
  });

  const addToLeftValue = key =>
    setState({
      ...state,
      leftValue: `${state.leftValue}${key}`,
    });

  const addOperator = key =>
    setState({
      ...state,
      operator: key,
    });

  const addToRightValue = key =>
    setState({
      ...state,
      rightValue: `${state.rightValue}${key}`,
    });

  const setResult = result => ({
    leftValue: '',
    operator: '',
    rightValue: '',
    result,
  });

  const onPress = key => {
    console.log({key});
    if (isNumber(key)) {
      const parsedNumber = parseInt(key, 10);
      if (!state.leftValue || !state.operator) {
        addToLeftValue(parsedNumber);
        return;
      }

      addToRightValue(key);
    }

    if (isOperator(key) && !state.operator) {
      addOperator(key);
      return;
    }

    if (isEqual(key)) {
      if (state.operator === '+') {
        const result = state.leftValue + state.rightValue;
        setResult(result);
        return;
      }

      if (state.operator === '-') {
        const result = state.leftValue - state.rightValue;
        setResult(result);
        return;
      }

      if (state.operator === '*') {
        const result = state.leftValue * state.rightValue;
        setResult(result);
        return;
      }

      if (state.operator === '/') {
        const result = state.leftValue / state.rightValue;
        setResult(result);
        return;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Screen>
          <Text>
            {state.result ||
              `${state.leftValue} ${state.operator} ${state.rightValue}`}
          </Text>
        </Screen>
      </View>
      <View style={styles.pad}>
        <Pad onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  screen: {
    height: '30%',
  },
  pad: {
    height: '60%',
  },
});

export default Calculator;
