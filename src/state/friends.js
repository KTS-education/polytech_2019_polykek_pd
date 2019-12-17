const SET_FRIENDS = 'SET_FRIENDS';

export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  payload: { friends },
});

const initialStore = {
  friends: [],
};

const reducer = (state = initialStore, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.payload.friends,
      };
    default:
      return state;
  }
};

export default reducer;
