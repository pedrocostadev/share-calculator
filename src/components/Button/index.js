import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, ScrollView, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => (
  <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={ev => {
        console.log(ev);
        onPress(title);
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  </ScrollView>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    margin: '2% 2% 2% 2%',
    height: '98%',
    borderWidth: 2,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    color: 'red',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 24,
  },
});

export default Button;
