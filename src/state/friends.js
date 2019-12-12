const CHANGE_TITLE = 'CHANGE_TITLE';

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: { title },
});

const initialStore = {
  title: 'Этот заголовок хранится в сторе',
};

const reducer = (state = initialStore, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export default reducer;
