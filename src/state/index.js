import { combineReducers, createStore } from 'redux';
import profile from './profile';
import searchBar from './searchbar';


const initStore = () => {
  const reducers = combineReducers({ profile, searchBar });

  return createStore(reducers);
};

export default initStore;
