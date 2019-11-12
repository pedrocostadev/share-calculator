import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const Operation = ({ text }) => <Text style={styles.operation}>{text}</Text>;

Operation.propTypes = {
  text: PropTypes.string,
};

Operation.defaultProps = {
  text: '',
};

export default Operation;
