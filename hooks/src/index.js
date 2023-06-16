import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app';
import 'materialize-css'
import * as serviceWorker from './assets/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();