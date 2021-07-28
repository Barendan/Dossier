import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import user from './user';
import persons from './persons';

const reducer = combineReducers({
  user,
  persons,
});

const store = configureStore({
  reducer,
});

export default store;
