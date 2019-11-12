import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Screen = ({ children }) => <View style={styles.container}>{children}</View>;

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
