export default function mapStateToProps(state) {
  return {
    completion: state.searchBar.completion,
  };
}
