/**
 * @fileoverview Greeting text reducer
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

/**
 * Set greeting text action type
 * @type {string}
 */
export const SET_GREETING_TEXT = 'SET_GREETING_TEXT';

/**
 * Action creator for setting greeting text
 * @param {string} greetingText - greeting text string for set
 * @returns {{type: string, greetingText: string}}
 */
export const setGreetingText = greetingText => ({
  type: SET_GREETING_TEXT,
  greetingText
});
