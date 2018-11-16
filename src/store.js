/**
 * @fileoverview Redux store creation & initialization.
 * @export store
 */

import {createStore} from 'redux';

import reducers from './reducers';

/**
 * Application's initial state.
 * @type {{
 *   greetingText: string,
 *   userName: string
 * }}
 */
const initialState = {
  greetingText: 'Hello!',
  userName: ''
};

/**
 * Singleton store instance for this application.
 * @type {Store<S>}
 */
const store = createStore(reducers, initialState);

export default store;
