import { combineReducers, createStore } from 'redux';
import profile from './profile';
import wishlishIds from './wishlistItems';


const initStore = () => {
  const reducers = combineReducers({ profile, wishlishIds });

  return createStore(reducers);
};

export default initStore;
