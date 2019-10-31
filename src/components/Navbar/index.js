import React from 'react';
import {View, StatusBar} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const NavBar = () => (
  <View>
    <StatusBar />
    <View>
      <Menu>
        <MenuTrigger text="Tools" />
        <MenuOptions customStyles={{optionsContainer: {margin: 40}}}>
          <MenuOption
            text="Share"
            onSelect={() => {
              console.log('SHARE');
            }}
          />
        </MenuOptions>
      </Menu>
    </View>
  </View>
);

export default NavBar;
