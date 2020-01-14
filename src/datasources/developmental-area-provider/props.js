import { toast } from 'react-toastify';

import {
  onErrorAction,
  onSuccessFetchAreas,
  onSaveMilestonesAnswer,
  onSuccessFetchAreaById,
  onSuccessFetchSkillById,
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
    .then(({ data }) => dispatch(onSuccessFetchAction(data)))
    .catch((error) => {
      dispatch(onErrorAction(error));
      toast.error(error.message);
    });
}

const mapStateToProps = ({ developmentalAreaProviderReducer }) => ({
  ...developmentalAreaProviderReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,

  fetchAreasAction() {
    const URL = `${BASE_URL}/areas`;
    const onSuccessFetch = () => {
      dispatch(onSuccessFetchAreas);
    };
    fetchData(URL, onSuccessFetch);
  },

  fetchAreaByIdAction(areaId = 1) {
    const URL = `${BASE_URL}/areas/${areaId}`;
    const onSuccessFetch = () => {
      dispatch(onSuccessFetchAreaById);
    };
    fetchData(URL, onSuccessFetch);
  },

  fetchSkillByIdAction(skillId = 23) {
    const URL = `${BASE_URL}/skills/${skillId}/milestones`;
    const onSuccessFetch = () => {
      dispatch(onSuccessFetchSkillById);
    };
    fetchData(URL, onSuccessFetch);
  },

  saveMilestonesAnswerAction(answers) {
    dispatch(onSaveMilestonesAnswer(answers));
    toast.success('¡All your answers have been saved!');
  },
});

export { mapStateToProps, mapDispatchToProps };
