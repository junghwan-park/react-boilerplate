import {SET_USER_NAME} from '../actions/userName';

/**
 * Reducer for userName state
 * @param {string} state - current state
 * @param {object} action - Action
 * @param {string} action.type - Action type
 * @param {string} action.userName - User name string
 * @returns {string}
 */
export const userName = (state = '', action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return action.userName;

    default:
      return state;
  }
};
