import { createStructuredSelector } from 'reselect';

import { onSuccessFetchSkill } from './actions';
import { makeSelectPropFromSkillProvider } from './selectors';

const BASE_URL = 'http://demo.kinedu.com/api/v3/skills';
const TOKEN = 'Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58';

const mapStateToProps = createStructuredSelector({
  skills: makeSelectPropFromSkillProvider('skills'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,

  fetchSkillByIdAction(skillId = 2) {
    const URL = `${BASE_URL}/${skillId}/milestones`;
    const headers = new Headers({
      Authorization: TOKEN,
    });
    const init = {
      headers,
      method: 'GET',
    };

    fetch(URL, init)
      .then((response) => response.json())
      .then(({ data }) => dispatch(onSuccessFetchSkill(data.skill)));
  },
});

export { mapStateToProps, mapDispatchToProps };
