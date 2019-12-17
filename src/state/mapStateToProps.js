const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  userId: state.profile.userId,
});

export default mapStateToProps;
