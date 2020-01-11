import { createStructuredSelector } from 'reselect';

import { onSuccessFetchSkill } from './actions';
import { makeSelectPropFromSkillProvider } from './selectors';

// eslint-disable-next-line no-undef
const { BASE_URL } = kinedu.config.API_CLIENTS;
const { SKILLS_URL_TOKEN } = process.env;

const mapStateToProps = createStructuredSelector({
  skills: makeSelectPropFromSkillProvider('skills'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,

  fetchSkillByIdAction(skillId = 2) {
    const URL = `${BASE_URL}/skills/${skillId}/milestones`;
    const headers = new Headers({
      Authorization: SKILLS_URL_TOKEN,
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
