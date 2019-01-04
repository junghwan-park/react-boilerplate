/**
 * Set userName action type.
 * @type {string}
 */
export const SET_USER_NAME = 'SET_USER_NAME';

/**
 * Action creator for setting userName.
 * @param {string} userName - User name for set
 * @returns {{type: string, userName: string}}
 */
export const setUserName = userName => ({
  type: SET_USER_NAME,
  userName
});
