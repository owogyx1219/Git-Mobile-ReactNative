import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Platform, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Profile from './Profile'
import Repositories from './Repositories'
import Followers from './Followers'
import Following from './Following'
import Repository from './Repository'
import FProfile from './FProfile'
import Login from './Login'
import Visualization from './Visualization'
/*
*navigation drawer view 
*contains information about all screens and its path 
*/
const DrawerExample = DrawerNavigator(
  {
      Login: {
        path: '/',
        screen: Login
      },
      Profile: {
        path: '/',
        screen: Profile,
      },
      Repositories: {
        path: '/',
        screen: Repositories,
      },
      Followers: {
        path: '/',
        screen: Followers,
      },
      Following: {
        path: '/',
        screen: Following,
      },
      Visualization: {
        path: '/',
        screen: Visualization,
      },
      Repository: {
        path: '/',
        screen: Repository,
      },
      FProfile: {
        path: '/',
        screen: FProfile,
      },

  },
  //inital screen is the Profile screen 
  {
    InitialRouteName: 'First',
    drawerPosition: 'left'
  }
);

module.exports = DrawerExample;

