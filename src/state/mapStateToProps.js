const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.profile.profile,
    userId: state.profile.userId,
    wishlistIds: state.wishlishIds.wishlishIds,
  };
};

export default mapStateToProps;
