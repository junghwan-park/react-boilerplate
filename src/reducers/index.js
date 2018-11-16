/**
 * @fileoverview Reducer index file.
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */
import {combineReducers} from 'redux';

import {greetingText} from './greetingText';
import {userName} from './userName';

export default combineReducers({
  greetingText,
  userName
});
