const SET_PROFILE = 'SET_PROFILE';
const SET_TOKEN = 'SET_TOKEN';
const SET_USERID = 'SET_USERID';

const initialStore = {
  profile: {},
  token: '',
  userId: '',
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: { token },
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: { profile },
});

export const setUserId = (userId) => ({
  type: SET_USERID,
  payload: { userId },
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
    case SET_USERID:
      return {
        ...state,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default reducer;
