import React from 'react';
import { View, StatusBar, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const NavBar = () => (
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
      onActionSelected={onShare}
    />
  </View>
);

export default NavBar;
