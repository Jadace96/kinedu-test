import { onShowLoader } from './actions';

const mapStateToProps = ({ loaderContainerReducer }) => ({
  ...loaderContainerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,

  showLoaderAction(showLoader) {
    dispatch(onShowLoader(showLoader));
  },
});

export { mapStateToProps, mapDispatchToProps };
