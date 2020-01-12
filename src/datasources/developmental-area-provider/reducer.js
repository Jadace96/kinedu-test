import {
  ON_SUCCESS_FETCH_AREAS,
  ON_SUCCESS_FETCH_AREA_BY_ID,
  ON_SUCCESS_FETCH_SKILL_BY_ID,
} from './constants';

const areaListStored = localStorage.fechedSkills;
const initialAreaList = areaListStored ? JSON.parse(areaListStored) : null;

const fechedSkillsStored = localStorage.fechedSkills;
const initialFechedSkills = fechedSkillsStored ? JSON.parse(fechedSkillsStored) : null;

const fechedAreasSkillsStored = localStorage.fechedSkills;
const initialFechedAreasSkills = fechedAreasSkillsStored ? JSON.parse(fechedAreasSkillsStored) : null;

const initialState = {
  areaList: initialAreaList,
  fechedSkills: initialFechedSkills,
  fechedAreasSkills: initialFechedAreasSkills,
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
      const fechedAreasSkills = { ...state.fechedAreasSkills };
      const { area, skills } = payload.area;
      const currentAreaId = `${area.name}_${area.id}`;

      if (!fechedAreasSkills[currentAreaId]) {
        fechedAreasSkills[currentAreaId] = {
          ...area,
          skills,
        };
      }

      localStorage.fechedAreasSkills = JSON.stringify(fechedAreasSkills);
      return { ...state, fechedAreasSkills };
    }

    case ON_SUCCESS_FETCH_SKILL_BY_ID: {
      const { skill } = payload.skill;
      const fechedSkills = {
        ...state.fechedSkills,
        [skill.id]: skill,
      };

      localStorage.fechedSkills = JSON.stringify(fechedSkills);
      return { ...state, fechedSkills };
    }

    default:
      return state;
  }
}

export { initialState, developmentalAreaProviderReducer };
