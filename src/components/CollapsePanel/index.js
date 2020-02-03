import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

import Chevron from '../../svg/Chevron';
import styles from './styles';

const CollapsePanel = ({ isVisible, onPress, children }) => {
  const chevronStateStyle = isVisible ? styles.expandedChevron : styles.collapsedChevron;
  const chevronProps = { ...styles.chevron, ...chevronStateStyle };
  return (
    <View style={styles.container}>
      <View style={isVisible ? styles.expandedButtonContainer : styles.collapsedButtonContainer}>
        <TouchableOpacity testID="collapse-panel-button" style={styles.button} onPress={onPress}>
          <Chevron {...chevronProps} />
        </TouchableOpacity>
      </View>
      {isVisible && <View style={styles.contentContainer}>{children}</View>}
    </View>
  );
};

CollapsePanel.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsePanel;
