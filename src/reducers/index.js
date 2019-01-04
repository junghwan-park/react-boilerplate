import {combineReducers} from 'redux';

import {greetingText} from './greetingText';
import {userName} from './userName';

export default combineReducers({
  greetingText,
  userName
});
