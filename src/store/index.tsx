import React, { useReducer, Dispatch } from 'react';
import reducers, { actionTypes } from './reducer';

export interface dispatchType {
  type: actionTypes,
  payload: any,
};
export interface contextType {
  state: state,
  dispatch: Dispatch<dispatchType>,
};
export type state = typeof initData;

const initData = {
  name: 'abc',
  age: 123,
  list: [],
};

export const context = React.createContext<contextType>({state: initData, dispatch: () => {}});

const reducer = (state: state, { type, payload }: dispatchType) => {
  return {...reducers[type](state, payload)};
}

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);
  return (
    <context.Provider value={{state, dispatch}}>
      { children }
    </context.Provider>
  );
}

export default Store;
