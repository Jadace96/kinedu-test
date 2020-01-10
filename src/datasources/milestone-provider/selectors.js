import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the milestoneProvider state domain
 */

const selectMilestoneProviderDomain = state =>
  state.milestoneProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectPropFromMilestoneProvider = propName =>
  createSelector(selectMilestoneProviderDomain, state => state.get(propName));

export { selectMilestoneProviderDomain, makeSelectPropFromMilestoneProvider };
