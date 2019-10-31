import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

const Screen = ({children}) => <View style={styles.container}>{children}</View>;

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '100%',
  },
});

export default Screen;
