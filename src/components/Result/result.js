import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const Result = ({ text }) => <Text style={styles.result}>{text}</Text>;

Result.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Result.defaultProps = {
  text: '',
};

export default Result;
