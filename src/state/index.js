import { combineReducers, createStore } from 'redux';
import profile from './profile';
import friends from './friends';
import wishlistIds from './wishlistItems';


const initStore = () => {
  const reducers = combineReducers({ profile, wishlistIds, friends });

  return createStore(reducers);
};

export default initStore;
