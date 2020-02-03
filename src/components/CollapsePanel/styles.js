import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  expandedButtonContainer: {
    height: '5%',
  },
  collapsedButtonContainer: {
    height: '100%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  contentContainer: {
    height: '95%',
  },
});

const svgStyles = {
  chevron: {
    color: 'white',
  },
  expandedChevron: {
    rotation: 90,
  },
  collapsedChevron: {
    rotation: 270,
  },
};

export default { ...styles, ...svgStyles };
