const SET_WISHLIST_ITEMS = 'SET_WISHLIST_ITEMS';

const initialStore = {
  wishlistIds: [],
};


export const setWishlistIds = (ids) => ({
  type: SET_WISHLIST_ITEMS,
  payload: { ids },
});


export const reducer = (state = initialStore, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_WISHLIST_ITEMS:
      return {
        ...state,
        wishlistIds: action.payload.ids,
      };
    default:
      return state;
  }
};

export default reducer;
