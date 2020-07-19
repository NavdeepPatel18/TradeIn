import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer, StackNavigator} from 'react-navigation';

import Menu_Distributor from './navigation/Menu_Distributor';
import Menu_Manufacturer from './navigation/Menu_Manufacturer';
import Menu_Shopkeeper from './navigation/Menu_Shopkeeper';
import Login from './screens/Login';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Menu_Manufacturer: {
      screen: Menu_Manufacturer,
      navigationOptions: {
        header: null,
      },
    },
    Menu_Distributor: {
      screen: Menu_Distributor,
      navigationOptions: {
        header: null,
      },
    },
    Menu_Shopkeeper: {
      screen: Menu_Shopkeeper,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
