/**
 * @fileoverview 'state.greetingText' reducer.
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

import {SET_GREETING_TEXT} from '../actions/greetingText';

/**
 * Reducer for greetingText state
 * @param {string} state - current state
 * @param {object} action - Action
 * @param {string} action.type - Action type
 * @param {string} action.greetingText - Greeting text string
 * @returns {string}
 */
export const greetingText = (state = 'Hello!', action) => {
  switch (action.type) {
    case SET_GREETING_TEXT:
      return action.greetingText;

    default:
      return state;
  }
};
