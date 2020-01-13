import {
  onSuccessFetchSkillById,
  onSuccessFetchAreas,
  onSuccessFetchAreaById,
} from './actions';

// eslint-disable-next-line no-undef
const { BASE_URL } = kinedu.config.API_CLIENTS;
const { SKILLS_URL_TOKEN } = process.env;

const headers = new Headers({
  Authorization: SKILLS_URL_TOKEN,
});
const defaultFetchParams = {
  headers,
  method: 'GET',
};

function fetchData(
  url,
  dispatch,
  onSuccessFetchAction,
  fetchParams = defaultFetchParams,
) {
  fetch(url, fetchParams)
    .then((response) => response.json())
    .then(({ data }) => dispatch(onSuccessFetchAction(data)));
}

const mapStateToProps = ({ developmentalAreaProviderReducer }) => ({
  ...developmentalAreaProviderReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,

  fetchAreasAction() {
    const URL = `${BASE_URL}/areas`;
    fetchData(URL, dispatch, onSuccessFetchAreas);
  },

  fetchAreaByIdAction(areaId = 1) {
    const URL = `${BASE_URL}/areas/${areaId}`;
    fetchData(URL, dispatch, onSuccessFetchAreaById);
  },

  fetchSkillByIdAction(skillId = 23) {
    const URL = `${BASE_URL}/skills/${skillId}/milestones`;
    fetchData(URL, dispatch, onSuccessFetchSkillById);
  },
});

export { mapStateToProps, mapDispatchToProps };