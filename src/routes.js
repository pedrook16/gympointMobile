import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';

import logo from '~/assets/logo-inline.png';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default (isSined = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn}),
        App: createBottomTabNavigator(
          {Dashboard},
          {
            defaultNavigationOptions: {},
            navigationOptions: {
              tabBarLabel: <Image source={logo} />,
            },
          },
        ),
      },
      {
        initialRouteName: isSined ? 'App' : 'Sign',
      },
    ),
  );
