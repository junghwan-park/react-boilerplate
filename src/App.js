/**
 * @fileoverview Application main entry file.
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

import ResultMessageArea from './components/ResultMessageArea';
import NameInputArea from './components/InputArea';

export default (
  <Provider store={store}>
    <>
      <NameInputArea />
      <ResultMessageArea />
    </>
  </Provider>
);
