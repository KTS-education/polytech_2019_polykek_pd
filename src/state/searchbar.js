const SET_COMPLETION = 'SET_COMPLETION';


const initialStore = {
  completion: '',
};

export const setCompletion = (completion) => ({
  type: SET_COMPLETION,
  payload: { completion },
});

const reducer = (state = initialStore, action) => {
  console.log(action.payload);
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_COMPLETION:
      return {
        ...state,
        completion: action.payload.completion,
      };
    default:
      return state;
  }
};

export default reducer;
