import { state, dispatchType } from './index';
import { Dispatch } from 'react';
import { actionTypes } from './reducer';

interface dispatchContext {
  state: state,
  dispatch: Dispatch<dispatchType>,
}

export enum dispatchTypes {
  setName = 'setName',
}
const actions: {
  [key in dispatchTypes]: (dispatchContext: dispatchContext, payload: any) => any
} = {
  setName({state, dispatch}) {
    console.log(state);
    dispatch({type: actionTypes.CHANGE_NAME, payload: { name: 'klj' }});
  }
}

export default actions;