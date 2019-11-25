import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default (isSined = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn}),
        App: createBottomTabNavigator({Dashboard}),
      },
      {
        initialRouteName: isSined ? 'App' : 'Sign',
      },
    ),
  );
