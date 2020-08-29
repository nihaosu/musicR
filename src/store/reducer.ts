import { state } from './index';
export enum actionTypes {
  CHANGE_NAME = 'CHANGE_NAME',
};
const reducers: {
  [key in actionTypes]: (state: state, payload: any) => state
} = {
  CHANGE_NAME(state, { name }) {
    state.name = name;
    return state;
  }
}
export default reducers;
