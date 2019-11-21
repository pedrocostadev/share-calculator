import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress, style }) => (
  <ScrollView contentContainerStyle={{ ...styles.container, ...style }}>
    <TouchableOpacity style={styles.button} onPress={() => onPress(title)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </ScrollView>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Button;
