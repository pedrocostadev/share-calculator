import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import styles from './styles';

const Screen = ({ children }) => (
  <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
