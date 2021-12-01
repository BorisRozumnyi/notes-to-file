import React, { createContext, useReducer } from 'react';
import {
  dataReducer,
  dataInitialState,
  notificationReducer,
  notificationInitialState,
} from './reducers';

const initialState = {
  data: dataInitialState,
  notification: notificationInitialState,
};

export const Context = createContext(initialState);

const combineReducers = (slices) => {
  return (state, action) =>
    Object.keys(slices).reduce(
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop](acc[prop], action),
      }),
      state
    );
};

const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
};

export const Store = ({ children }) => {
  const rootReducer = combineReducers({
    data: reduceReducers(dataReducer),
    notification: reduceReducers(notificationReducer),
  });
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};
