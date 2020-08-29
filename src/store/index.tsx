import React, { useReducer, Dispatch, useMemo, useEffect, useCallback, useState } from 'react';
import reducers, { actionTypes } from './reducer';
import dispatches, { dispatchTypes } from './action';

export interface dispatchType {
  type: actionTypes,
  payload: any,
};
export interface contextType {
  state: state,
  commit: Dispatch<dispatchType>,
  dispatch: (dispatchType: dispatchTypes, payload?: any) => any,
};
export type state = typeof initData;

const initData = {
  name: 'abc'
};

export const context = React.createContext<contextType>({state: initData, commit: () => {}, dispatch: () => {}});

const reducer = (state: state, { type, payload }: dispatchType) => {
  return {...reducers[type](state, payload)};
}

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);
  const DISPATCH = useCallback((dispatchType: dispatchTypes, payload?: any) => {
    const result = dispatches[dispatchType]({state, dispatch}, payload);
    return result;
  }, [state]);
  return (
    <context.Provider value={
      {
        state,
        commit: dispatch,
        dispatch: DISPATCH,
      }
    }>
      { children }
    </context.Provider>
  );
}

export default Store;
