import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import createNavigationStack from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';

import Header from '~/components/Header';

export default (isSined = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn}),
        App: createBottomTabNavigator({Checkins}),
      },
      {
        initialRouteName: isSined ? 'App' : 'Sign',
      },
    ),
  );
