import { combineReducers, createStore } from 'redux';
import profile from './profile';
import wishlistIds from './wishlistItems';


const initStore = () => {
  const reducers = combineReducers({ profile, wishlistIds });

  return createStore(reducers);
};

export default initStore;
