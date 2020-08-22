import { state } from './index';
export enum actionTypes {
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_AGE = 'CHANGE_AGE',
};
const reducers: {
  [key in actionTypes]: (state: state, payload: any) => state
} = {
  CHANGE_NAME(state, { name }) {
    state.name = name;
    return state;
  },
  CHANGE_AGE(state, { age }) {
    state.age = age;
    return state;
  }
}
export default reducers;
