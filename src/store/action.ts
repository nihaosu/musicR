import { state, dispatchType } from './index';
import { Dispatch, useEffect, useState } from 'react';
import { actionTypes } from './reducer';

interface dispatchContext {
  state: state,
  dispatch: Dispatch<dispatchType>,
}

export enum dispatchTypes {
  setName = 'setName',
  getName = 'getName',
  getName1 = 'getName1',
}
const actions: {
  [key in dispatchTypes]: (dispatchContext: dispatchContext, payload: any) => any
} = {
  setName({state, dispatch}) {
    // console.log(state);
    dispatch({type: actionTypes.CHANGE_NAME, payload: { name: 'klj' }});
  },
  getName({ state, dispatch }) {
    // console.log(state);
    dispatch({type: actionTypes.CHANGE_NAME, payload: { name: '123456' }});
  },
  getName1({state}) {
    // console.log(state);
  }
}

function useDispatch_action(state: state ,dispatch: Dispatch<dispatchType>) {
  // const [State, setState] = useState(state);
  let State = state;
  useEffect(() => {
    // console.log(state);
    // setState({...state});
    State = state;
    console.log(State);
  }, [state]);
  return function (dispatchType: dispatchTypes, payload?: any) {
    console.log(State);
    const result = actions[dispatchType]({state: State, dispatch}, payload);
    return result;
  }
}

export default useDispatch_action;