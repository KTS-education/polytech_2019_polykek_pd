const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.profile.profile,
    userId: state.profile.userId,
    wishlistIds: state.wishlistIds.wishlistIds,
    friends: state.friends.friends,
  };
};

export default mapStateToProps;
