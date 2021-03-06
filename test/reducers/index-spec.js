import {createStore} from 'redux';
import expect from 'expect';
import RootReducer from '../../src/reducers';

describe('store', () => {
  it('should have initialize state with an empty object', () => {
    const store = createStore(RootReducer);
    const state = store.getState();
    expect(state).toEqual({ state: {}} );
  });
});
