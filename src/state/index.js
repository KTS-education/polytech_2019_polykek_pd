import { combineReducers, createStore } from 'redux';
import profile from './profile';


const initStore = () => {
  const reducers = combineReducers({ profile });

  return createStore(reducers);
};

export default initStore;
