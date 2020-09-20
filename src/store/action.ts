import { state, dispatchType } from './index';
import { Dispatch } from 'react';
import { actionTypes } from './reducer';

interface dispatchContext {
  state: state,
  dispatch: Dispatch<dispatchType>,
}

export enum dispatchTypes {
}
const actions: {
  [key in dispatchTypes]: (dispatchContext: dispatchContext, payload: any) => any
} = {
}

export default actions;