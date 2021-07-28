import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar} from 'react-native-paper';

import DashboardScreen from '_scenes/dashboard';
import AccountSettings from '_scenes/accountSettings';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        {/* <Ionicons name={'menu'} size={40} color={WHITE} /> */}
      </TouchableOpacity>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{headerTitle: 'Dashboard'}}
      />
      <Stack.Screen
        name="Account"
        component={AccountSettings}
        options={{headerTitle: 'Account Settings'}}
      />
      />
    </Stack.Navigator>
  );
};
