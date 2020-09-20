import { state } from './index';
export enum actionTypes {
  CHANGE_CUR_SELECT = 'CHANGE_CUR_SELECT',
};
const reducers: {
  [key in actionTypes]: (state: state, payload: any) => state
} = {
  CHANGE_CUR_SELECT(state, { curSelect }) {
    state.curSelect = curSelect;
    return state;
  }
}
export default reducers;
