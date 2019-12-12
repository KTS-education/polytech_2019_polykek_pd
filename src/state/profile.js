const SET_PROFILE = 'SET_PROFILE';
const SET_TOKEN = 'SET_TOKEN';

const initialStore = {
  profile: {},
  token: '',
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: { token },
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: { profile },
});

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.profile,
      };
    default:
      return state;
  }
};

export default reducer;
