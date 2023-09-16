import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  changeChanelName,
  customeIncrement,
  decrement,
  increment,
  reset,
} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customeIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeChanelName, (state) => {
    return {
      ...state,
      channelName: 'Good morning!',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
