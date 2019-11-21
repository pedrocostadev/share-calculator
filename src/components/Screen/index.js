import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import styles from './styles';

const Screen = ({ children }) => (
  <View style={styles.container}>
    <ScrollView>{children}</ScrollView>
  </View>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
