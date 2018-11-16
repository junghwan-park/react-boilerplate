/**
 * Index entry for bootstrapping source and assets.
 */

import {render} from 'react-dom';

import '../assets/css/common.css';
import '../assets/css/example.css';

import App from './App';

render(App, document.querySelector('#wrap'));
