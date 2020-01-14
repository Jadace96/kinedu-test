import {
  ON_SUCCESS_FETCH_SKILL_BY_ID,
  ON_SUCCESS_FETCH_AREA_BY_ID,
  ON_SAVE_MILESTONES_ANSWER,
  ON_SUCCESS_FETCH_AREAS,
} from './constants';

export const onSuccessFetchSkillById = (skill) => ({
  type: ON_SUCCESS_FETCH_SKILL_BY_ID,
  skill,
});

export const onSuccessFetchAreaById = (area) => ({
  type: ON_SUCCESS_FETCH_AREA_BY_ID,
  area,
});

export const onSuccessFetchAreas = (areas) => ({
  type: ON_SUCCESS_FETCH_AREAS,
  areas,
});

export const onSaveMilestonesAnswer = (answers) => ({
  type: ON_SAVE_MILESTONES_ANSWER,
  answers,
});
