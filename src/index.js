import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {AppRX} from './components/App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux.js';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}><AppRX/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
