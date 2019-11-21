import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress, style, ...props }) => (
  <ScrollView contentContainerStyle={{ ...styles.container, ...style }}>
    <TouchableOpacity {...props} style={styles.button} onPress={() => onPress(title)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </ScrollView>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  ...TouchableOpacity.propTypes,
};

export default Button;
