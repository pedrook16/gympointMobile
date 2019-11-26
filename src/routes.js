import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

import Header from '~/components/Header';

export default (isSined = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn}),
        App: createBottomTabNavigator(
          {Dashboard},
          {
            defaultNavigationOptions: {
              headerTitle: () => <Header />,
            },
          },
        ),
      },
      {
        initialRouteName: isSined ? 'App' : 'Sign',
      },
    ),
  );
