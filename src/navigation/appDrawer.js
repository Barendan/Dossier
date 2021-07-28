import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DashboardStack} from './dashboardStack';
import {DrawerContent} from './DrawerContent';

const DrawerNav = createDrawerNavigator();

const AppDrawer = props => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <DrawerContent {...props} />}>
      <DrawerNav.Screen name="Dashboard" component={DashboardStack} />
    </DrawerNav.Navigator>
  );
};

export default AppDrawer;
