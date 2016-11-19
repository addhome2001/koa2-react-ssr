import { createStore } from 'redux';
// 暫時
import counter from '../containers/Counter/reducer'

export default reducer => {
  const store = createStore(counter);
  const preloadedState = store.getState();
  return { store, preloadedState };
};
