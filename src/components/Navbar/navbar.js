import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const onShare = async screenText => {
  if (!screenText || screenText.trim().length === 0) {
    return;
  }

  try {
    Share.share({ message: screenText });
  } catch (error) {
    console.error(error.message);
  }
};

const NavBar = ({ screenText }) => (
  <View>
    <StatusBar />
    <Icon.ToolbarAndroid
      style={styles.toolbar}
      logoName="calculator"
      title="&nbsp;Share Calculator"
      titleColor="white"
      actions={[
        {
          title: 'Settings',
          iconName: 'share-alt',
          iconSize: 30,
          show: 'always',
        },
      ]}
      overflowIconName="ellipsis-v"
      onActionSelected={() => onShare(screenText)}
    />
  </View>
);

NavBar.propTypes = {
  screenText: PropTypes.string.isRequired,
};

export default NavBar;
