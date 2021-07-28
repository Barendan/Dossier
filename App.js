import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {AuthStack, AppDrawer} from '_navigations';
import {NavigationService} from './helpers';

import storage from '../src/storage';
import {login} from '_store/user';

import store from './store';

const App = () => {
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function isLoggedIn() {
      try {
        let storedUser = await storage.load({
          key: 'user',
          id: 'currentUser',
        });

        if (storedUser?.id) {
          dispatch(login(storedUser));
        }
      } catch (error) {
        console.log('storedUser error:', error);
      }
    }
    isLoggedIn();
  }, []);

  const appIsReady = () => {
    return () => {
      NavigationService.isReadyRef.current = false;
    };
  };

  useEffect(() => {
    appIsReady();
    // checkPermission();
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva}>
        <MenuProvider>
          <NavigationContainer
            ref={NavigationService.navigationRef}
            onReady={() => {
              NavigationService.isReadyRef.current = true;
            }}>
            {user ? <AppDrawer /> : <AuthStack />}
          </NavigationContainer>
        </MenuProvider>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
