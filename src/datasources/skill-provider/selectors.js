import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the skillProvider state domain
 */

const selectSkillProviderDomain = (state) => state.skillProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectPropFromSkillProvider = (propName) => createSelector(selectSkillProviderDomain, (state) => state.get(propName));

export { selectSkillProviderDomain, makeSelectPropFromSkillProvider };
