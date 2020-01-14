import {
  ON_ERROR,
  ON_SUCCESS_FETCH_AREAS,
  ON_SAVE_MILESTONES_ANSWER,
  ON_SUCCESS_FETCH_AREA_BY_ID,
  ON_SUCCESS_FETCH_SKILL_BY_ID,
} from './constants';

const areaListStored = localStorage.areaList;
const initialAreaList = areaListStored ? JSON.parse(areaListStored) : null;

const fechedSkillsStored = localStorage.fechedSkills;
const initialFechedSkills = fechedSkillsStored ? JSON.parse(fechedSkillsStored) : null;

const fechedAreasWithSkillsStored = localStorage.fechedAreasWithSkills;
const initialFechedAreasWithSkills = fechedAreasWithSkillsStored ? JSON.parse(fechedAreasWithSkillsStored) : null;

const initialState = {
  error: {},
  areaList: initialAreaList,
  fechedSkills: initialFechedSkills,
  fechedAreasWithSkills: initialFechedAreasWithSkills,
};

function developmentalAreaProviderReducer(state = initialState, payload) {
  switch (payload.type) {
    case ON_SUCCESS_FETCH_AREAS: {
      const { areas } = payload.areas;
      const areaList = [];
      areas.forEach((area) => {
        areaList[area.id] = area;
      });
      return { ...state, areaList };
    }

    case ON_SUCCESS_FETCH_AREA_BY_ID: {
      const fechedAreasWithSkills = { ...state.fechedAreasWithSkills };
      const { area, skills } = payload.area;
      const currentAreaId = `${area.name}_${area.id}`;

      if (!fechedAreasWithSkills[currentAreaId]) {
        fechedAreasWithSkills[currentAreaId] = {
          ...area,
          skills,
        };
      }
      localStorage.fechedAreasWithSkills = JSON.stringify(fechedAreasWithSkills);
      return { ...state, fechedAreasWithSkills };
    }

    case ON_SUCCESS_FETCH_SKILL_BY_ID: {
      const { skill } = payload.skill;
      const milestones = {};

      skill.milestones.forEach((milestone) => {
        milestones[milestone.id] = milestone;
      });

      const fechedSkills = {
        ...state.fechedSkills,
        [skill.id]: { ...skill, milestones },
      };

      localStorage.fechedSkills = JSON.stringify(fechedSkills);
      return { ...state, fechedSkills };
    }

    case ON_SAVE_MILESTONES_ANSWER: {
      const fechedSkills = { ...state.fechedSkills };
      Object.values(payload.answers).forEach((answer) => {
        fechedSkills[answer.skill_id].milestones[answer.id].answer = answer.answer;
      });
      localStorage.fechedSkills = JSON.stringify(fechedSkills);
      return { ...state, fechedSkills };
    }

    case ON_ERROR: {
      return { ...state, error: payload.error }; }

    default:
      return state;
  }
}

export { initialState, developmentalAreaProviderReducer };
